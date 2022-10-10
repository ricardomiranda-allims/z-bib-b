const { controllerToJson } = require('../../utils/controller')
const services = require('./services')

exports.getRoutes = (parentPath = '') => {
  const group = 'status'
  const routes = [
    {
      method: 'get',
      path: `${parentPath}/${group}`,
      group,
      name: 'API status',
      description: 'API health check',
      controller: controllerToJson(services.getStatus)
    }
  ]
  return routes
}
