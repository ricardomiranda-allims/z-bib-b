const response = require('./response')

exports.controllerToJson = cb => async (req, res) =>
  await response.setResponseToJson(req, res, cb)
