import { Container } from '@material-ui/core'
import { Meta } from '@storybook/react'
import Paper from 'components/common/Paper'

import TextInput from '.'

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta

export const Primary: React.VFC<{}> = () => (
  <Container maxWidth='sm'>
    <Paper style={{ padding: 32 }}>
      <TextInput label='NAME' name='name' style={{ marginBottom: 16 }} />
      <TextInput label='NAME' name='name' helperText='Put in some name' style={{ marginBottom: 16 }} />
      <TextInput label='NAME' name='name' helperText='This is required' error />
    </Paper>
  </Container>
)