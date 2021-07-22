import { Meta } from '@storybook/react'

import { Container } from '@material-ui/core'
import { Mic, Headset, Settings } from '@material-ui/icons'

import Paper from 'components/common/Paper'
import ToggleButton from '.'

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
} as Meta

export const Primary: React.VFC<{}> = () => (
  <Container maxWidth='sm'>
    <Paper style={{ padding: 32 }} >
      <ToggleButton>
        <Mic />
      </ToggleButton>
      <ToggleButton>
        <Headset />
      </ToggleButton>
      <ToggleButton>
        <Settings />
      </ToggleButton>
    </Paper>
  </Container>
)