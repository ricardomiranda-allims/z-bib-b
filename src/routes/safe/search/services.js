exports.getList = async (req = {}) => {
  const { db } = utils
  const { query = {} } = req
  const { word = '' } = query
  if (!word) return { error: 'Empty search' }
  const sql = `
    select
      v.id
      ,v.id_book as book
      ,v.chapter 
      ,v."number" as verse
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
      db.word w 
      join db.word_verse wv 
        on wv.id_word = w.id
      join db.verse v
        on v.id = wv.id_verse 
      join db.book k
        on k.id = v.id_book 
    where
      w.word ilike ('%' || trim(lower($1)) || '%')
    group by
      k.order_full 
      ,book
      ,chapter
      ,verse
      ,v.id
    order by
      k.order_full 
      ,chapter
      ,verse
  `
  const rows = await db.getRows(sql, [word])
  const out = { data: rows }
  return out
}
