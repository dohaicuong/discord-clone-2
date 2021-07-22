import { makeStyles } from "@material-ui/core"
import SignupForm from './SignupForm'
import backgroundDark from 'assets/auth_background_dark.jpg'

const SignupScene = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <SignupForm />
      </div>
    </div>
  )
}
export default SignupScene

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url("${backgroundDark}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    zIndex: 10,
    width: '100%',
  }
})
