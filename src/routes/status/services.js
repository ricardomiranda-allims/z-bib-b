exports.getStatus = async () => {
  const now = new Date()
  const data = { now }
  return { data }
}
