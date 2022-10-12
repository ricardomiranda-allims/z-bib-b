const services = require('./services')

exports.getRoutes = (parentPath = '') => {
  const { ctrl } = utils
  const group = 'testament'
  const routes = [
    {
      method: 'get',
      path: `${parentPath}/${group}s`,
      group,
      name: `List ${group}s`,
      controller: ctrl.controllerToJson(services.getList)
    }
  ]
  return routes
}
