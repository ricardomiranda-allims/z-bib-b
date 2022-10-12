const { controllerDefault } = require('../../utils/controller')

exports.getRoutes = (parentPath = '') => {
  const routes = [
    {
      method: 'get',
      path: '*',
      hidden: true,
      controller: controllerDefault()
    }
  ]
  return routes
}
