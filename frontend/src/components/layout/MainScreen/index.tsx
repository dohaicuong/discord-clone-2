import { Grid, makeStyles } from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import clsx from "clsx"
import IconButton from "components/common/IconButton"
import { useState } from "react"

const MainScreen = () => {
  const classes = useStyles()
  const [isFocusChat, setIsFocusChat] = useState(false)
  const outFocusChat = (e: React.MouseEvent<any, MouseEvent>) => {
    e.stopPropagation()
    setIsFocusChat(false)
  }
  const inFocusChat = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    setIsFocusChat(true)
  }

  return (
    <div className={classes.wrapper} onClick={outFocusChat}>
      <Grid container className={classes.root}>
        <Grid item className={classes.servers}>
          servers
        </Grid>
        <Grid item className={classes.sidebar}>
          channels
        </Grid>
        <Grid
          item xs
          onClick={inFocusChat}
          className={clsx(
            classes.chat,
            isFocusChat && classes.mobileFullScreenChat
          )}
        >
          <IconButton onClick={outFocusChat}>
            <Menu />
          </IconButton>
          messages
        </Grid>
      </Grid>
    </div>
  )
}

export default MainScreen

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },

  root: {
    position: 'relative',
    height: '100%',
    background: theme.palette.background.tertiary,
    [theme.breakpoints.down('xs')]: {
      width: 1000
    },
  },

  servers: {
    width: 72,
    height: '100%',
    background: theme.palette.background.tertiary,
  },

  sidebar: {
    width: 240,
    height: '100%',
    background: theme.palette.background.secondary,

    [theme.breakpoints.down('xs')]: {
      borderRadius: 12,
    },
  },

  chat: {
    height: '100%',
    background: theme.palette.background.primary,

    [theme.breakpoints.down('xs')]: {
      borderRadius: 12,
      marginLeft: 8,
    },
  },
  mobileFullScreenChat: {
    [theme.breakpoints.down('xs')]: {
      pointerEvent: 'none',
      position: 'absolute',
      margin: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: 0,
    },
  },
}))