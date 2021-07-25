import { Container } from '@material-ui/core'
import { Meta } from '@storybook/react'

import Badge from '.'
import Paper from 'components/common/Paper'
import BlobButton from 'components/common/BlobButton'
import { theme } from 'providers/theme'
import NoDisturbIcon from './NoDisturbIcon'
import IdleIcon from './IdleIcon'
import OfflineIcon from './OfflineIcon'

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta

export const Primary: React.VFC<{}> = () => (
  <Container maxWidth='sm'>
    <Paper style={{ padding: 32, background: theme.palette.background.tertiary }}>
      <div>
        <Badge
          badgeContent={2} color='default'
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          style={{ margin: 4 }}
        >
          <BlobButton />
        </Badge>
        <Badge
          badgeContent={2} color='secondary'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          style={{ margin: 4 }}
        >
          <BlobButton />
        </Badge>
        <Badge
          badgeContent={2} color='primary'
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          style={{ margin: 4 }}
        >
          <BlobButton />
        </Badge>
        <Badge
          badgeContent={2} color='error'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          style={{ margin: 4 }}
        >
          <BlobButton />
        </Badge>
      </div>

      <div>
        <Badge
          color='success'
          badgeContent=' '
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          style={{ margin: 4 }}
        >
          <BlobButton />
        </Badge>

        <Badge
          badgeContent={<NoDisturbIcon />}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          style={{ margin: 4 }}
        >
          <BlobButton />
        </Badge>

        <Badge
          badgeContent={<IdleIcon />}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          style={{ margin: 4 }}
        >
          <BlobButton />
        </Badge>

        <Badge
          badgeContent={<OfflineIcon />}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          style={{ margin: 4 }}
        >
          <BlobButton />
        </Badge>
      </div>
    </Paper>
  </Container>
)