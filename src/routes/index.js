exports.getRoutes = (parentPath = '/api') => {
  const basePath = ''
  const path = parentPath + basePath
  const routes = [...require('./status').getRoutes(path)]
  return routes
}
