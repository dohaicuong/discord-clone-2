import { Container } from '@material-ui/core'
import { Meta } from '@storybook/react'

import Badge from '.'
import Paper from 'components/common/Paper'
import BlobButton from 'components/common/BlobButton'
import { theme } from 'providers/theme'

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta

export const Primary: React.VFC<{}> = () => (
  <Container maxWidth='sm'>
    <Paper style={{ padding: 32, background: theme.palette.background.tertiary }}>
      <div>
        <Badge
          badgeContent={2} color='error'
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          style={{ margin: 4 }}
        >
          <BlobButton />
        </Badge>
      </div>
      <div>
        <Badge
          badgeContent={2} color='error'
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          style={{ margin: 4 }}
        >
          <BlobButton />
        </Badge>
      </div>
      <div>
        <Badge
          badgeContent={2} color='error'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          style={{ margin: 4 }}
        >
          <BlobButton />
        </Badge>
      </div>
      <div>
        <Badge
          badgeContent={2} color='error'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          style={{ margin: 4 }}
        >
          <BlobButton />
        </Badge>
      </div>
    </Paper>
  </Container>
)