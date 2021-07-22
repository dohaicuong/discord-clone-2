import {
  ListItemIcon as MuiListItemIcon,
  withStyles,
} from '@material-ui/core'

const ListItemIcon = withStyles(theme => ({
  root: {
    minWidth: 0,
    marginRight: 6,
    color: theme.palette.text.channelDefault,
  }
}))(MuiListItemIcon)

export default ListItemIcon
