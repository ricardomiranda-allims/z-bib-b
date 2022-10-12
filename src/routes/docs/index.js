const { controllerToJson } = require('../../utils/controller')
const services = require('./services')

exports.getRoutes = (parentPath = '') => {
  const group = 'docs'
  const routes = [
    {
      method: 'get',
      path: `${parentPath}/${group}`,
      hidden: true,
      controller: controllerToJson(services.getDocsJson)
    }
  ]
  return routes
}
