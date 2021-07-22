import Fastify from 'fastify'

export const server = Fastify()

import mercurius from 'mercurius'
import { schema } from './schema'
import { context, subContext } from './context'
server.register(mercurius, {
  schema,
  context,
  // allowBatchedQueries: true,
  subscription: {
    context: subContext,
  },
})

import altairFastify from 'altair-fastify-plugin'
server.register(altairFastify, {
  path: '/altair',
  baseURL: '/altair/',
  endpointURL: '/graphql'
})

import fastifyCors from 'fastify-cors'
server.register(fastifyCors)
