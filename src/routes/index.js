exports.getRoutes = (parentPath = '/api') => {
  const basePath = ''
  const path = parentPath + basePath
  const routes = [
    ...require('./open').getRoutes(path),
    ...require('./safe').getRoutes(path),
    ...require('./open/default').getRoutes(path)
  ]
  return routes
}
