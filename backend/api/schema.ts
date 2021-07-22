import { makeSchema } from 'nexus'
import { join } from 'path'
import * as types from './graphql'
import plugins from './plugins'

export const schema = makeSchema({
  types,
  plugins,
  outputs: {
    typegen: join(__dirname, '..', 'nexus-typegen.ts'),
    schema: join(__dirname, '..', 'schema.graphql'),
  },
  contextType: {
    module: join(__dirname, 'context', 'index.ts'),
    export: 'Context',
  },
})