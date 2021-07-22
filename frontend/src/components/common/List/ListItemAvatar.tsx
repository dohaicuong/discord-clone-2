import {
  ListItemAvatar as MuiListItemAvatar,
  withStyles,
} from '@material-ui/core'

const ListItemAvatar = withStyles({
  root: {
    minWidth: 0,
    marginRight: 12,
  }
})(MuiListItemAvatar)

export default ListItemAvatar
