const { controllerToJson } = require('../../utils/controller')
const services = require('./services')

exports.getRoutes = (parentPath = '') => {
  const group = 'search'
  const routes = [
    {
      method: 'get',
      path: `${parentPath}/${group}`,
      group,
      name: 'List',
      //description: '',
      parameters: [
        {
          in: 'query',
          name: 'word',
          type: 'string'
        }
      ],
      controller: controllerToJson(services.getList)
    }
  ]
  return routes
}
