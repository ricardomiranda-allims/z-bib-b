exports.getDocsJson = async (req = {}) => {
  const { info } = utils
  const paths = getPaths()
  const env = info.getEnv(req)
  const version = info.getVersion()
  const data = {
    // swagger: '2.0',
    info: {
      title: 'Bible API',
      version,
      description: `env: ${env}`
    },
    paths
  }
  return { data }
}

const getPaths = () => {
  const { getRoutes } = require('../../../routes')
  const routes = getRoutes()
  let paths = []
  for (const { method, path, group, name, hidden } of routes) {
    !hidden && paths.push({ method, path, group, name })
  }
  return paths
}
