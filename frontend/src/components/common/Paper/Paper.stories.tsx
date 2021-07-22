import { Container } from '@material-ui/core'
import { Meta } from '@storybook/react'

import Paper from '.'

export default {
  title: 'Components/Paper',
  component: Paper,
} as Meta

export const Primary: React.VFC<{}> = () => (
  <Container maxWidth='sm'>
    <Paper style={{ padding: 32 }} elevation={2}>
      Paper
    </Paper>
  </Container>
)