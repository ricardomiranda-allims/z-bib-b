const response = require('./response')

exports.controllerToJson = cb => async (req, res) =>
  await response.setResponseToJson(req, res, cb)

exports.controllerDefault = cb => async (req, res) =>
  await response.setResponseDefault(req, res, cb)
