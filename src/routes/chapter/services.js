const { getRows } = require('../../utils/db')

exports.getList = async (req = {}) => {
  const { query = {} } = req
  const { book = '' } = query
  const sql = `
    select
      c.chapter as id
      ,c.chapter as name
    from
      db.chapter c 
    where
      c.id_book = $1
    order by
      id
  `
  const rows = await getRows(sql, [book])
  const out = { data: rows }
  return out
}
