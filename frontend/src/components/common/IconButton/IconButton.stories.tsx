import { Meta } from '@storybook/react'

import { Container } from '@material-ui/core'
import { Notifications, PeopleAlt } from '@material-ui/icons'
import { Pin } from 'mdi-material-ui'

import IconButton from '.'

export default {
  title: 'Components/IconButton',
  component: IconButton,
} as Meta

export const Primary: React.VFC<{}> = () => (
  <Container maxWidth='sm'>
    <IconButton style={{ marginLeft: 8, marginRight: 8 }}>
      <Notifications />
    </IconButton>
    <IconButton style={{ marginLeft: 8, marginRight: 8 }}>
      <Pin />
    </IconButton>
    <IconButton style={{ marginLeft: 8, marginRight: 8 }} color='primary'>
      <PeopleAlt />
    </IconButton>
  </Container>
)