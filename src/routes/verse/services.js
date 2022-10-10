const { getRows } = require('../../utils/db')

exports.getList = async (req = {}) => {
  const { query = {} } = req
  const { book = '', chapter = 1 } = query
  const sql = `
    select
      tb.idx as id
      ,(
        select jsonb_object_agg(vs.id,vs.value) from (
          select
            b.id
            ,coalesce(v."text",'') as value
          from
            db.bible b 
            left join db.verse v 
              on v.id_bible = b.id
              and v.id_book = c.id_book 
              and v.chapter = c.chapter 
              and v."number" = tb.idx
          where
            true --b.id in ('bhs','aa','acf','nvi')
          order by
            b.id_language 
            ,b."name" 
        ) vs
      ) as name
    from
      db.chapter c 
      join generate_series(1,999) tb(idx)
        on tb.idx <= c.verses 
    where
      c.id_book = $1
      and c.chapter = $2
    order by
      tb.idx
  `
  const rows = await getRows(sql, [book, chapter])
  const out = { data: rows }
  return out
}
