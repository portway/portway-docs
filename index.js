const Fastify = require('fastify')
const path = require('path')
const fastifyStatic = require('fastify-static')

// https is necessary otherwise browsers will not
// be able to connect
const fastify = Fastify({
  // http2: true,
  // @todo hook this up with certs
  //  https: {
  //    key: getKeySomehow(),
  //    cert: getCertSomehow()
  //  },
  logger: true
})

fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'build'),
  wildcard: true
})

fastify.setNotFoundHandler((req, res) => {
  res.sendFile('index.html')
})

fastify.listen(3003, '0.0.0.0', (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})
