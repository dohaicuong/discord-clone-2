import { Meta } from '@storybook/react'

import { Container } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { theme } from 'providers/theme'

import Paper from 'components/common/Paper'
import BlobButton from '.'

export default {
  title: 'Components/BlobButton',
  component: BlobButton,
} as Meta

export const Primary: React.VFC<{}> = () => {
  return (
    <Container maxWidth='sm'>
      <Paper style={{ padding: 32, background: theme.palette.background.tertiary }}>
        <div style={{ display: 'flex' }}>
          <BlobButton style={{ margin: 4 }} />
          <BlobButton color='primary' style={{ margin: 4 }} />
          <BlobButton color='secondary' style={{ margin: 4 }} />
          <BlobButton color='error' style={{ margin: 4 }} />
        </div>
        <div>
          <BlobButton
            style={{ margin: 4 }}
            image='https://pbs.twimg.com/profile_images/1326706754164383744/cHB7eqaI.jpg'
          />
          <BlobButton
            style={{ margin: 4 }}
            image='https://i.gifer.com/F4gJ.gif'
          />
        </div>
        <div>
          <BlobButton
            style={{ margin: 4 }}
            icon={<Add />}
            color='secondary'
          />
        </div>
      </Paper>
    </Container>
  )
}