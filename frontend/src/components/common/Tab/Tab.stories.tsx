import { Meta } from '@storybook/react'

import { useState } from 'react'
import { Container } from '@material-ui/core'
import Paper from 'components/common/Paper'
import Tabs from './Tabs'
import Tab from '.'
import Divider from '../Divider'

export default {
  title: 'Components/Tab',
  component: Tab,
} as Meta

export const Primary: React.VFC<{}> = () => {
  const [value, setValue] = useState(0)

  return (
    <Container maxWidth='xs'>
      <Paper style={{ padding: 32 }}>
        <Tabs value={value} onChange={(_e, newValue) => setValue(newValue)}>
          <Tab label='Online' />
          <Tab label='All' />
          <Tab label='Pending' />
          <Tab label='Blocked' />
        </Tabs>
        <Divider />
        index: {value}
      </Paper>
    </Container>
  )
}