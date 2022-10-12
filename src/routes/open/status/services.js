exports.getStatus = async (req = {}) => {
  const now = new Date()
  const { ip } = req
  const data = { now, ip }
  return { data }
}
