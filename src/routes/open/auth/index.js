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
      parameters: [
        {
          in: 'query',
          name: 'user',
          type: 'string'
        },
        {
          in: 'query',
          name: 'password',
          type: 'string'
        }
      ],
      controller: ctrl.controllerToJson(services.getAuth)
    }
  ]
  return routes
}
