const Hapi = require('@hapi/hapi')
const Routes = require('./routes')
const config = require('./configs')

const init = async () => {
  const server = Hapi.server({
    port: config.app.port,
    host: config.app.host
  })

  server.route(Routes)

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
