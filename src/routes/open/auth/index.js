const services = require('./services')

exports.getRoutes = (parentPath = '') => {
  const { ctrl } = utils
  const group = 'auth'
  const routes = [
    {
      method: 'get',
      path: `${parentPath}/${group}`,
      group,
      name: 'API authentication',
      controller: ctrl.controllerToJson(services.getAuth)
    }
  ]
  return routes
}
