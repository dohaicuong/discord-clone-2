import { Divider as MuiDivider, withStyles } from '@material-ui/core'

const Divider = withStyles(theme => ({
  root: {
    height: 2,
    borderRadius: 1,
    backgroundColor: theme.palette.background.modifierAccent,
  },
  vertical: {
    height: 'auto',
    width: 2,
  },
}))(MuiDivider)

export default Divider
