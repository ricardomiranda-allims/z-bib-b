const services = require('./services')

exports.getRoutes = (parentPath = '') => {
  const { ctrl } = utils
  const group = 'book'
  const routes = [
    {
      method: 'get',
      path: `${parentPath}/${group}s`,
      group,
      name: `List ${group}s`,
      parameters: [
        {
          in: 'query',
          name: 'testament',
          type: 'string',
          enum: ['at', 'nt']
        }
      ],
      controller: ctrl.controllerToJson(services.getList)
    }
  ]
  return routes
}
