exports.getList = async () => {
  const { db } = utils
  const sql = `
    select
      t.id
      ,t.name
    from
      db.testament t
    order by
      id
  `
  const rows = await db.getRows(sql)
  const out = { data: rows }
  return out
}
