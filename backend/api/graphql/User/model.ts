import { objectType } from 'nexus'

export const UserModel = objectType({
  name: 'User',
  definition: t => {
    t.implements('Node')
    t.nonNull.relayGlobalId('id', {})
    t.nonNull.string('email')
  }
})