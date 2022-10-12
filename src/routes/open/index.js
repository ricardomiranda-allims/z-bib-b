exports.getRoutes = (parentPath = '') => {
  const basePath = ''
  const path = parentPath + basePath
  const routes = [
    ...require('./status').getRoutes(path),
    ...require('./auth').getRoutes(path),
    ...require('./docs').getRoutes(path)
  ]
  return routes
}
