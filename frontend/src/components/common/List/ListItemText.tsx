import {
  ListItemText as MuiListItemText,
  withStyles,
} from '@material-ui/core'

const ListItemText = withStyles(theme => ({
  primary: {
    color: theme.palette.header.primary,
    fontWeight: 600,
  },
  secondary: {
    color: theme.palette.header.secondary,
  },
  multiline: {
    margin: 0,
  }
}))(MuiListItemText)

export default ListItemText