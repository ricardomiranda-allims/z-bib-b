exports.getRoutes = (parentPath = '') => {
  const { ctrl } = utils
  const routes = [
    {
      method: 'get',
      path: '*',
      hidden: true,
      controller: ctrl.controllerDefault()
    }
  ]
  return routes
}
