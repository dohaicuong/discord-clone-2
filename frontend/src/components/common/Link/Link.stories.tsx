import { Container } from '@material-ui/core'
import { Meta } from '@storybook/react'
import Paper from 'components/common/Paper'

import Link from '.'

export default {
  title: 'Components/Link',
  component: Link,
} as Meta

export const Primary: React.VFC<{}> = () => (
  <Container maxWidth='sm'>
    <Paper style={{ padding: 32 }}>
      <Link>
        Forgot your password?
      </Link>
    </Paper>
  </Container>
)