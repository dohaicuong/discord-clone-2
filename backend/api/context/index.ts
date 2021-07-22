import { FastifyRequest, FastifyReply } from 'fastify'
import { SocketStream } from 'fastify-websocket'

import { PubSub } from 'mercurius'
import { PrismaClient } from '@prisma/client'
import * as cryptoService from './cryptoService'
import * as jwtService from './jwtService'

const prisma = new PrismaClient()

export type Context = {
  pubsub: PubSub
  prisma: PrismaClient
  cryptoService: typeof cryptoService
  jwtService: typeof jwtService
  userId: string | null
}

export const context = async (request: FastifyRequest, reply: FastifyReply) => {
  const token = request.headers.authorization?.replace('Bearer ', '')
  const tokenPayload = !token
    ? null
    : await jwtService.verifyToken(token).catch(() => reply.status(401))

  return {
    prisma,
    cryptoService,
    jwtService,
    userId: tokenPayload?.sub ?? null,
  }
}

export const subContext = async (connection: SocketStream, request: FastifyRequest) => {
  return {
    prisma,
    cryptoService,
    jwtService,
  }
}