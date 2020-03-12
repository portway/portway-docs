const Fastify = require('fastify')
const path = require('path')
const fastifyStatic = require('fastify-static')
const memcache = require('memory-cache')

// Generate JSON from API fetches to prevent rate-limiting
const { fetchGuides, fetchGuide } = require('./lib/processGuides')

// Do it on load
// fetchGuides()

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

fastify.get('/api/guides', async (request, reply) => {
  try {
    if (memcache.get('guidesList')) {
      reply.send(memcache.get('guidesList'))
    } else {
      const result = await fetchGuides()
      reply.send(result)
    }
  } catch (err) {
    console.error(err)
  }
})

fastify.get('/api/guide/:id', async (request, reply) => {
  try {
    if (memcache.get(request.params.id)) {
      reply.send(memcache.get(request.params.id))
    } else {
      const result = await fetchGuide(request.params.id)
      reply.send(result)
    }
  } catch (err) {
    console.error(err)
  }
})

fastify.listen(3003, '0.0.0.0', (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})
