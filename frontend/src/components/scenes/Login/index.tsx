import { makeStyles } from "@material-ui/core"
import LoginForm from './LoginForm'
import backgroundDark from 'assets/auth_background_dark.jpg'

const LoginScene = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <LoginForm />
      </div>
    </div>
  )
}
export default LoginScene

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
