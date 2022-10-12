exports.getRoutes = (parentPath = '') => {
  const basePath = '/safe'
  const path = parentPath + basePath
  const routes = [
    ...require('./testament').getRoutes(path),
    ...require('./book').getRoutes(path),
    ...require('./chapter').getRoutes(path),
    ...require('./verse').getRoutes(path),
    ...require('./search').getRoutes(path)
  ]
  return routes
}
