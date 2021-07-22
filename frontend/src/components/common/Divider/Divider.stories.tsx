import { Container } from '@material-ui/core'
import { Meta } from '@storybook/react'

import Divider from '.'
import BlobButton from 'components/common/BlobButton'
import Paper from 'components/common/Paper'
import { theme } from 'providers/theme'

export default {
  title: 'Components/Divider',
  component: Divider,
} as Meta

export const Primary: React.VFC<{}> = () => (
  <Container maxWidth='sm'>
    <Paper style={{ padding: 32, background: theme.palette.background.tertiary }}>
      <div style={{ display: 'flex' }}>
        <BlobButton style={{ margin: 4 }} />
        <Divider flexItem orientation='vertical' />
        <BlobButton color='primary' style={{ margin: 4 }} />
      </div>
      <Divider />
      <div style={{ display: 'flex' }}>
        <BlobButton color='secondary' style={{ margin: 4 }} />
        <Divider flexItem orientation='vertical' />
        <BlobButton color='error' style={{ margin: 4 }} />
      </div>
    </Paper>
  </Container>
)