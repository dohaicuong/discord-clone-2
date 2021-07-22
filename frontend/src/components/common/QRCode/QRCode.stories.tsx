import { Container, Grid } from '@material-ui/core'
import { Meta } from '@storybook/react'
import Link from 'components/common/Link'
import Paper from 'components/common/Paper'
import Typography from 'components/common/Typography'

import QRCode from '.'

export default {
  title: 'Components/QRCode',
  component: QRCode,
} as Meta

export const Primary: React.VFC<{}> = () => (
  <Container maxWidth='sm'>
    <Paper style={{ padding: 32 }}>
      <Grid container>
        <Grid item xs={6}>
          <QRCode value="https://google.com" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h3'>
            Or go to
          </Typography>
          <Typography variant='subtitle1'>
            <Link href='https://google.com'>
              https://google.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  </Container>
)