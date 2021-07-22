import { InputLabel, withStyles } from '@material-ui/core'

const StyledInputLabel = withStyles(theme => ({
  root: {
    color: theme.palette.text.channelDefault,
    lineHeight: '16px',
    fontWeight: 600,
  }
}))(InputLabel)

export default StyledInputLabel
