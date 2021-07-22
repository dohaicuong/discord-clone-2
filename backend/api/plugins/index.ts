import { relayNode } from './RelayNode'
import { relayGlobalIdPlugin } from '@jcm/nexus-plugin-relay-global-id'

export default [
  relayNode,
  relayGlobalIdPlugin({ shouldAddRawId: false })
]