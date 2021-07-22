import { Divider, Grid, Hidden } from "@material-ui/core"
import Button from "components/common/Button"
import Link from "components/common/Link"
import Paper from "components/common/Paper"
import QRCode from "components/common/QRCode"
import TextInput from "components/form/TextInput"
import Typography from "components/common/Typography"

const LoginForm = () => {
  return (
    <div style={{ maxWidth: 1480, display: 'flex', justifyContent: 'center' }}>
      <Paper style={{ padding: 32, width: 'fit-content' }}>
        <Grid container alignItems='center'>
          <Grid item style={{ width: 416 }}>
            <Typography variant='h3' gutterBottom style={{ textAlign: 'center' }}>
              Welcome back!
            </Typography>
            <Typography variant='subtitle1' style={{ textAlign: 'center' }}>
              We're so excited to see you again!
            </Typography>
            <form style={{ marginTop: 20 }}>
              <TextInput name='email' type='email' label='EMAIL' style={{ marginBottom: 20 }} />
              <TextInput name='password' type='password' label='PASSWORD' />
              <div style={{ marginTop: 8, marginBottom: 20 }}>
                <Link>Forgot your password?</Link>
              </div>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
                style={{ marginBottom: 8 }}
              >
                Login
              </Button>
              <Typography variant='body2'>
                <span>Need an account? </span>
                <Link>Register</Link>
              </Typography>
            </form>
          </Grid>

          <Hidden smDown>
            <Divider
              orientation='vertical'
              flexItem
              style={{ height: 1, width: 2, margin: '0 32px' }}
            />
            <Grid item style={{ width: 240 }}>
              <QRCode value='https://google.com'
                style={{ margin: '0 auto 32px' }}
              />
              <Typography variant='h3' gutterBottom style={{ textAlign: 'center' }}>
                Log in with QR Code
              </Typography>
              <Typography variant='subtitle1' style={{ textAlign: 'center' }}>
                Scan this with the <strong>Discord mobile app</strong> to log in instantly.
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
      </Paper>
    </div>
  )
}
export default LoginForm
