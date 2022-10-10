exports.start = async server => {
  const { API_PORT = 7000 } = process.env

  server.listen(API_PORT, () =>
    console.log(`Server running on: http://localhost:${API_PORT}/api/docs\n`)
  )
}
