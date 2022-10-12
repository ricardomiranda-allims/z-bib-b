const { controllerToJson } = require('../../utils/controller')
const services = require('./services')

exports.getRoutes = (parentPath = '') => {
  const group = 'book'
  const routes = [
    {
      method: 'get',
      path: `${parentPath}/${group}s`,
      group,
      name: 'List',
      //description: '',
      parameters: [
        {
          in: 'query',
          name: 'testament',
          type: 'string',
          enum: ['at', 'nt']
        }
      ],
      controller: controllerToJson(services.getList)
    }
  ]
  return routes
}
