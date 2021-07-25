import Button from "components/common/Button"
import Link from "components/common/Link"
import Paper from "components/common/Paper"
import TextInput from "components/form/TextInput"
import Typography from "components/common/Typography"

const SignupForm = () => {
  return (
    <div style={{ maxWidth: 1480, display: 'flex', justifyContent: 'center' }}>
      <Paper style={{ padding: 32, width: 'fit-content' }}>
        <div style={{ width: 416 }}>
          <Typography variant='h3' style={{ textAlign: 'center' }}>
            Create an account
          </Typography>
          <form style={{ marginTop: 20 }}>
            <TextInput name='email' type='email' label='EMAIL' style={{ marginBottom: 20 }} />
            <TextInput name='username' label='USERNAME' style={{ marginBottom: 20 }} />
            <TextInput name='password' type='password' label='PASSWORD' style={{ marginBottom: 20 }} />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
              style={{ marginBottom: 8 }}
            >
              Continue
            </Button>
            <div style={{ marginTop: 8, marginBottom: 20 }}>
              <Link>
                Already have an account?
              </Link>
            </div>
            <Typography variant='caption'>
              By registering, you agree to Discord's{' '}
              <Link href='#'>Terms of Service</Link>{' '}
              and{' '}
              <Link href='#'>Privacy Policy</Link>.
            </Typography>
          </form>
        </div>
      </Paper>
    </div>
  )
}

export default SignupForm