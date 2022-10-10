const { controllerToJson } = require('../../utils/controller')
const services = require('./services')

exports.getRoutes = (parentPath = '') => {
  const group = 'testament'
  const routes = [
    {
      method: 'get',
      path: `${parentPath}/${group}List`,
      group,
      name: 'List',
      //description: '',
      controller: controllerToJson(services.getList)
    }
  ]
  return routes
}
