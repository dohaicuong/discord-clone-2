import { Container, Paper } from '@material-ui/core'
import { Meta } from '@storybook/react'
import { useState } from 'react'

import QRScan from '.'

export default {
  title: 'Components/QRScan',
  component: QRScan,
} as Meta

export const Primary: React.VFC<{}> = () => {
  const [data, setData] = useState<null | string>(null)

  return (
    <Container maxWidth='sm'>
      <Paper style={{ padding: 32 }} elevation={2}>
        <QRScan onScan={data => setData(data)} />
        <p>data: {data}</p>
      </Paper>
    </Container>
  )
}