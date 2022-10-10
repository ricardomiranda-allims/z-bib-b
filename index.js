require('dotenv').config()

const express = require('express')
const cors = require('cors')

const { start } = require('./src/utils/server')
const { getRoutes } = require('./src/routes')
const { setRoutes } = require('./src/utils/router')

const init = async () => {
  const server = express()

  server.use(cors())

  const routes = getRoutes()
  setRoutes(server, routes)

  await start(server)
}
init()
