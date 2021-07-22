import { relayNodeInterfacePlugin } from '@jcm/nexus-plugin-relay-node-interface'
import { Context } from '../context'

export const relayNode = relayNodeInterfacePlugin({
  idFetcher: async ({ id, type }, { prisma }: Context, _info) => {
    if(!id || !type) return null

    const node = await (prisma as any)?.[type.toLowerCase()]?.findUnique?.({ where: { id }})
    if(!node) return null

    return {
      __typename: type,
      ...node
    }
  },
  resolveType: ({ __typename }) => __typename,
})