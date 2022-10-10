require('dotenv').config()

const { Client } = require('pg')

const getRows = async (sql, params = []) => {
  let data = []
  try {
    const client = new Client()
    await client.connect()
    const res = (await client.query(sql, params)) || {}
    await client.end()
    data = res.rows || []
  } catch {}
  return data
}
exports.getRows = getRows
