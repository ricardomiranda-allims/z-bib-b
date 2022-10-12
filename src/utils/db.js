require('dotenv').config()

const { Client } = require('pg')

const getRows = async (sql, params = []) => {
  let data = []
  try {
    const { PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD } = process.env
    const client = new Client({
      host: PGHOST,
      port: PGPORT,
      database: PGDATABASE,
      user: PGUSER,
      password: PGPASSWORD
    })
    await client.connect()
    const res = (await client.query(sql, params)) || {}
    await client.end()
    data = res.rows || []
  } catch {}
  return data
}
exports.getRows = getRows
