const Fastify = require('fastify')
const fs = require('fs')
const path = require('path')

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

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'build'),
})

fastify.get('/', async (request, reply) => {
  const stream = fs.createReadStream('./build/index.html')
  reply.type('text/html').send(stream)
})

fastify.listen(3000, '0.0.0.0', (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})
