exports.getRoutes = (parentPath = '/api') => {
  const basePath = ''
  const path = parentPath + basePath
  const routes = [
    ...require('./status').getRoutes(path),
    ...require('./testament').getRoutes(path),
    ...require('./book').getRoutes(path),
    ...require('./chapter').getRoutes(path),
    ...require('./verse').getRoutes(path),
    ...require('./default').getRoutes(path)
  ]
  return routes
}
