const services = require('./services')

exports.getRoutes = (parentPath = '') => {
  const { ctrl } = utils
  const group = 'docs'
  const routes = [
    {
      method: 'get',
      path: `${parentPath}/${group}`,
      hidden: true,
      controller: ctrl.controllerToJson(services.getDocsJson)
    }
  ]
  return routes
}
