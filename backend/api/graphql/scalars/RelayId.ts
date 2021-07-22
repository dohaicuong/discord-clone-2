import { fromGlobalId } from 'graphql-relay'
import { scalarType } from 'nexus'

// Only use for input
export const RelayId = scalarType({
  name: 'RelayId',
  asNexusMethod: 'relayId',
  description: 'This will take relay global id as input and pass internal id to resolvers',
  parseValue: value => fromGlobalId(value).id,
  parseLiteral: (v: any) => fromGlobalId(v.value).id,
})
