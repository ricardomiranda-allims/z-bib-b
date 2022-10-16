exports.getList = async (req = {}) => {
  const { db } = utils
  const { query = {} } = req
  const { book = '', chapter = 1 } = query
  const sql = `
    select
      v."number" as id
      ,(
        select
          coalesce(bv."text",'') as value
        from
          db.verse_bible bv
        where
          bv.id_bible = 'ara'
          and bv.id_book = v.id_book 
          and bv.chapter = v.chapter 
          and bv."number" = v."number" 
      ) as ara
      ,(
        select
          coalesce(bv."text",'') as value
        from
          db.verse_bible bv
        where
          bv.id_bible = 'acf'
          and bv.id_book = v.id_book 
          and bv.chapter = v.chapter 
          and bv."number" = v."number" 
      ) as acf
      ,(
        select
          coalesce(bv."text",'') as value
        from
          db.verse_bible bv
        where
          bv.id_bible = 'aa'
          and bv.id_book = v.id_book 
          and bv.chapter = v.chapter 
          and bv."number" = v."number" 
      ) as aa
      ,(
        select
          coalesce(bv."text",'') as value
        from
          db.verse_bible bv
        where
          bv.id_bible = 'naa'
          and bv.id_book = v.id_book 
          and bv.chapter = v.chapter 
          and bv."number" = v."number" 
      ) as naa
      ,(
        select
          coalesce(bv."text",'') as value
        from
          db.verse_bible bv
        where
          bv.id_bible = 'nvi'
          and bv.id_book = v.id_book 
          and bv.chapter = v.chapter 
          and bv."number" = v."number" 
      ) as nvi
      ,(
        select
          coalesce(bv."text",'') as value
        from
          db.verse_bible bv
        where
          bv.id_bible = 'nvt'
          and bv.id_book = v.id_book 
          and bv.chapter = v.chapter 
          and bv."number" = v."number" 
      ) as nvt
      ,(
        select
          coalesce(bv."text",'') as value
        from
          db.verse_bible bv
        where
          bv.id_bible = 'kjv'
          and bv.id_book = v.id_book 
          and bv.chapter = v.chapter 
          and bv."number" = v."number" 
      ) as kjv
      ,(
        select
          coalesce(bv."text",'') as value
        from
          db.verse_bible bv
        where
          bv.id_bible = 'bhs'
          and bv.id_book = v.id_book 
          and bv.chapter = v.chapter 
          and bv."number" = v."number" 
      ) as bhs
      ,(
        select
          coalesce(bv."text",'') as value
        from
          db.verse_bible bv
        where
          bv.id_bible = 'receptus'
          and bv.id_book = v.id_book 
          and bv.chapter = v.chapter 
          and bv."number" = v."number" 
      ) as receptus
      ,(
        select
          coalesce(bv."text",'') as value
        from
          db.verse_bible bv
        where
          bv.id_bible = 'vulgata'
          and bv.id_book = v.id_book 
          and bv.chapter = v.chapter 
          and bv."number" = v."number" 
      ) as vulgata
    from
      db.verse v 
    where
      v.id_book = $1
      and v.chapter = $2
    order by
      v."number" 
  `
  const rows = await db.getRows(sql, [book, chapter])
  const out = { data: rows }
  return out
}
