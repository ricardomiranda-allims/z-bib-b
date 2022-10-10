const { getRows } = require('../../utils/db')

exports.getList = async (req = {}) => {
  const { query = {} } = req
  const { word = '' } = query
  const sql = `
    select
      v.id_book || '/' || v.chapter::text || '/' || v."number"::text as id
      ,(
        select jsonb_object_agg(vs.id,vs.value) from (
          select
            b.id
            ,coalesce(v2."text",'') as value
          from
            db.bible b 
            left join db.verse v2 
              on v2.id_bible = b.id
              and v2.id_book = v.id_book 
              and v2.chapter = v.chapter 
              and v2."number" = v."number"
          order by
            b.id_language 
            ,b."name" 
        ) vs
      ) as name
      ,v.id_book as book
      ,v.chapter 
      ,v."number" as verse
    from
      db.verse v 
      join db.book k
        on k.id = v.id_book 
    where
      v."text" ilike ('%' || $1 || '%')
    group by
      k.order_full 
      ,book
      ,chapter
      ,verse
    order by
      k.order_full 
      ,chapter
      ,verse
  `
  const rows = await getRows(sql, [word])
  const out = { data: rows }
  return out
}
