exports.start = async server => {
  const apiPort = getPort()

  server.listen(apiPort, () => {
    const port = apiPort === '80' ? '' : `:${apiPort}`
    console.log(`Server running on: http://localhost${port}/api/status\n`)
  })
}

const getPort = () => {
  const { API_PORT = '' } = process.env
  const intPort = Number.parseInt(API_PORT.trim())
  const apiPort =
    !isNaN(intPort) && intPort >= 0 && intPort < 65536 ? intPort : 80
  return apiPort
}
