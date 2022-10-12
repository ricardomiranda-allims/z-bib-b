const services = require('./services')

exports.getRoutes = (parentPath = '') => {
  const { ctrl } = utils
  const group = 'chapter'
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
          name: 'book',
          type: 'string'
        }
      ],
      controller: ctrl.controllerToJson(services.getList)
    }
  ]
  return routes
}
