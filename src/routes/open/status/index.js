const services = require('./services')

exports.getRoutes = (parentPath = '') => {
  const { ctrl } = utils
  const group = 'status'
  const routes = [
    {
      method: 'get',
      path: `${parentPath}/${group}`,
      group,
      name: 'API status',
      description: 'API health check',
      controller: ctrl.controllerToJson(services.getStatus)
    }
  ]
  return routes
}
