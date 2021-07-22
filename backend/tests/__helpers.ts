import { join } from 'path'
import { execSync } from 'child_process'
import cuid from 'cuid'

import { PrismaClient } from '.prisma/client'
import { createMercuriusTestClient } from 'mercurius-integration-testing'
import { server } from '../api/server'

type TestContext = {
  client: ReturnType<typeof createMercuriusTestClient>
  prisma: PrismaClient
}

export const createTestContext = (): TestContext => {
  let ctx = {} as TestContext
  const prismaCtx = prismaTestContext()

  beforeAll(async () => {
    const client = createMercuriusTestClient(server)
    const prisma = await prismaCtx.before()

    Object.assign(ctx, {
      client,
      prisma,
    })
  })

  afterAll(async () => {
    await prismaCtx.after()
  })

  return ctx
}

const prismaTestContext = () => {
  const prismaBinary = join(__dirname, '..', 'node_modules', '.bin', 'prisma')
  let prismaClient: null | PrismaClient = null
  const id = cuid()
  const env = `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/${id}_db"`

  return {
    async before() {
      // Run the migrations to ensure our schema has the required structure
      execSync(`${env} && ${prismaBinary} db push`)
      // Construct a new Prisma Client connected to the generated schema
      prismaClient = new PrismaClient()
      return prismaClient
    },
    async after() {
      execSync(`${env} && ${prismaBinary} migrate reset --force`)
      // Release the Prisma Client connection
      await prismaClient?.$disconnect()
    },
  }
}
