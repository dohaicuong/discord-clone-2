import { Link as MuiLink, withStyles } from '@material-ui/core'

const Link = withStyles(theme => ({
  root: {
    color: theme.palette.text.link,
    cursor: 'pointer'
  },
}))(MuiLink)

export default Link
