import {
  ListItemSecondaryAction as MuiListItemSecondaryAction,
  withStyles,
} from '@material-ui/core'

const ListItemSecondaryAction = withStyles(theme => ({
  root: {
    right: 8,
    '&:hover': {
      color: theme.palette.text.interactiveHover,
    },
    '&:active': {
      marginTop: 1
    }
  },
}))(MuiListItemSecondaryAction)

export default ListItemSecondaryAction
