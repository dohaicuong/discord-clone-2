import { Container } from '@material-ui/core'
import { Meta } from '@storybook/react'
import Paper from 'components/common/Paper'

import Typography from '.'

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta

export const Primary: React.VFC<{}> = () => (
  <Container maxWidth='sm'>
    <Paper style={{ padding: 32 }}>
      <Typography variant='h3' gutterBottom>
        Welcome back
      </Typography>
      <Typography variant='subtitle1'>
        We're so excited to see you again!
      </Typography>

      <Typography variant='body2'>
        Need an account?
      </Typography>
    </Paper>
  </Container>
)