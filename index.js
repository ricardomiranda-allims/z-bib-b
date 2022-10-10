require('dotenv').config()

const express = require('express')

const { start } = require('./src/utils/server')
const { getRoutes } = require('./src/routes')
const { setRoutes } = require('./src/utils/router')

const init = async () => {
  const server = express()

  const routes = getRoutes()
  setRoutes(server, routes)

  await start(server)
}
init()
