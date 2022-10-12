const httpMethods = [
  'get',
  'head',
  'connect',
  'options',
  'trace',
  'post',
  'put',
  'delete',
  'patch'
]

const setRoute = (server, method = 'get', path, controller) => {
  const newMethod = method.toLowerCase()
  if (!path || !controller || !httpMethods.includes(newMethod)) return
  server[newMethod](path, controller)
}

exports.setRoutes = server => {
  const routes = require('../routes').getRoutes()
  for (const { method, path, controller } of routes) {
    setRoute(server, method, path, controller)
  }
}
