require('dotenv').config()

const { Client } = require('pg')

const getRows = async (sql, params = []) => {
  let data = []
  try {
    const {
      PGHOST = 'localhost',
      PGPORT = 5432,
      PGDATABASE = 'postgres',
      PGUSER = 'postgres',
      PGPASSWORD = 'postgres',
      PGSSL = false
    } = process.env
    const client = new Client({
      host: PGHOST,
      port: PGPORT,
      database: PGDATABASE,
      user: PGUSER,
      password: PGPASSWORD,
      ssl: toBoolean(PGSSL)
    })
    await client.connect()
    const res = (await client.query(sql, params)) || {}
    await client.end()
    data = res.rows || []
  } catch (error) {
    console.error(error)
  }
  return data
}
exports.getRows = getRows

const toBoolean = value =>
  (typeof value === 'boolean' && value) ||
  (typeof value === 'string' && value.toLowerCase().trim() === 'true')
