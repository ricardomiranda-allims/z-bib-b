const services = require('./services')

exports.getRoutes = (parentPath = '') => {
  const { ctrl } = utils
  const group = 'verse'
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
        },
        {
          in: 'query',
          name: 'chapter',
          type: 'integer'
        }
      ],
      controller: ctrl.controllerToJson(services.getList)
    }
  ]
  return routes
}
