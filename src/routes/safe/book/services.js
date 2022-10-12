exports.getList = async (req = {}) => {
  const { db } = utils
  const { query = {} } = req
  const { testament = '' } = query
  const sql = `
    select
      k.id 
      ,k."name" 
    from
      db.book k
    where
      $1 = ''
      or k.id_testament = $1
    order by
      k.order_full
  `
  const rows = await db.getRows(sql, [testament])
  const out = { data: rows }
  return out
}
