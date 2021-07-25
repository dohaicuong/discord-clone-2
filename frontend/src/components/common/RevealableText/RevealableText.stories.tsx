import { Container } from '@material-ui/core'
import { Meta } from '@storybook/react'

import Paper from 'components/common/Paper'
import RevealableText from '.'

export default {
  title: 'Components/RevealableText',
  component: RevealableText,
} as Meta

export const Primary: React.VFC<{}> = () => (
  <Container maxWidth='sm'>
    <Paper style={{ padding: 32 }} elevation={2}>
      <RevealableText
        text='beatyshot@gmail.com'
        showingCharacters={10}
      />
      <RevealableText
        text='0426893799'
        showingCharacters={4}
      />
    </Paper>
  </Container>
)