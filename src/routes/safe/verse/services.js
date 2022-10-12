exports.getList = async (req = {}) => {
  const { db } = utils
  const { query = {} } = req
  const { book = '', chapter = 1 } = query
  const sql = `
    select
      tb.idx as id
      ,(
        select
          coalesce(v."text",'') as value
        from
          db.verse v 
        where
          v.id_bible = 'ara'
          and v.id_book = c.id_book 
          and v.chapter = c.chapter 
          and v."number" = tb.idx
      ) as ara
      ,(
        select
          coalesce(v."text",'') as value
        from
          db.verse v 
        where
          v.id_bible = 'nvi'
          and v.id_book = c.id_book 
          and v.chapter = c.chapter 
          and v."number" = tb.idx
      ) as nvi
      ,(
        select
          coalesce(v."text",'') as value
        from
          db.verse v 
        where
          v.id_bible = 'bhs'
          and v.id_book = c.id_book 
          and v.chapter = c.chapter 
          and v."number" = tb.idx
      ) as bhs
      ,(
        select
          coalesce(v."text",'') as value
        from
          db.verse v 
        where
          v.id_bible = 'vulgata'
          and v.id_book = c.id_book 
          and v.chapter = c.chapter 
          and v."number" = tb.idx
      ) as vulgata
      ,(
        select
          coalesce(v."text",'') as value
        from
          db.verse v 
        where
          v.id_bible = 'aa'
          and v.id_book = c.id_book 
          and v.chapter = c.chapter 
          and v."number" = tb.idx
      ) as aa
      ,(
        select
          coalesce(v."text",'') as value
        from
          db.verse v 
        where
          v.id_bible = 'acf'
          and v.id_book = c.id_book 
          and v.chapter = c.chapter 
          and v."number" = tb.idx
      ) as acf
      ,(
        select
          coalesce(v."text",'') as value
        from
          db.verse v 
        where
          v.id_bible = 'receptus'
          and v.id_book = c.id_book 
          and v.chapter = c.chapter 
          and v."number" = tb.idx
      ) as receptus
      ,(
        select
          coalesce(v."text",'') as value
        from
          db.verse v 
        where
          v.id_bible = 'nvt'
          and v.id_book = c.id_book 
          and v.chapter = c.chapter 
          and v."number" = tb.idx
      ) as nvt
      ,(
        select
          coalesce(v."text",'') as value
        from
          db.verse v 
        where
          v.id_bible = 'naa'
          and v.id_book = c.id_book 
          and v.chapter = c.chapter 
          and v."number" = tb.idx
      ) as naa
      ,(
        select
          coalesce(v."text",'') as value
        from
          db.verse v 
        where
          v.id_bible = 'kjv'
          and v.id_book = c.id_book 
          and v.chapter = c.chapter 
          and v."number" = tb.idx
      ) as kjv
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
  const rows = await db.getRows(sql, [book, chapter])
  const out = { data: rows }
  return out
}
