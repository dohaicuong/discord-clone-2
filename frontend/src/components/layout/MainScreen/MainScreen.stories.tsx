import { Container } from '@material-ui/core'
import { Meta } from '@storybook/react'

import MainScreen from '.'

export default {
  title: 'Layout/MainScreen',
  component: MainScreen,
} as Meta

export const Default: React.VFC<{}> = () => (
  <Container style={{ height: 600 }}>
    <MainScreen />
  </Container>
)
