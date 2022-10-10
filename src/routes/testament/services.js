const { getRows } = require('../../utils/db')

exports.getList = async () => {
  const sql = `
    select
      t.id
      ,t.name
    from
      db.testament t
    order by
      id
  `
  const rows = await getRows(sql)
  const out = { data: rows }
  return out
}
