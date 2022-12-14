const services = require('./services')

exports.getRoutes = (parentPath = '') => {
  const { ctrl } = utils
  const group = 'search'
  const routes = [
    {
      method: 'get',
      path: `${parentPath}/${group}`,
      group,
      name: `Search occurrences`,
      parameters: [
        {
          in: 'query',
          name: 'word',
          type: 'string'
        }
      ],
      controller: ctrl.controllerToJson(services.getList)
    }
  ]
  return routes
}
