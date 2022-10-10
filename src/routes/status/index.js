const { controllerToJson } = require('../../utils/controller')
const { getStatus } = require('./services')

exports.getRoutes = (parentPath = '') => {
  const basePath = '/status'
  const path = parentPath + basePath
  const group = 'General'
  const routes = [
    {
      method: 'get',
      path,
      group,
      name: 'API status',
      description: 'API health check',
      controller: controllerToJson(getStatus)
    }
  ]
  return routes
}
