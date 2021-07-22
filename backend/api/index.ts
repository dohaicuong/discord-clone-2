import { server } from './server'

server.listen(4000, '0.0.0.0').then((url) => {
  console.log(`🚀 graphql is ready at ${url}`)
  console.log(`🚀 altair playground is ready at ${url}/altair`)
})

process.on('SIGTERM', () => process.exit())