const { controllerDefault } = require('../../utils/controller')

exports.getRoutes = (parentPath = '') => {
  const routes = [
    {
      method: 'get',
      path: '*',
      controller: controllerDefault()
    }
  ]
  return routes
}
