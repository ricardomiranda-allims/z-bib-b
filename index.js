require('dotenv').config()

const express = require('express')
const cors = require('cors')

utils = require('./src/utils')

const init = async () => {
  const { server, router } = utils
  const app = express()
  app.use(cors())
  router.setRoutes(app)
  await server.start(app)
}
init()
