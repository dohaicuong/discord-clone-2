import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
  withStyles
} from '@material-ui/core'
import { ComponentType } from 'react'

type IconButtonProps = Omit<MuiIconButtonProps, 'disableRipple' | 'disableFocusRipple' | 'disableTouchRipple' | 'color'> & {
  color?: 'default' | 'primary'
}

const IconButton: ComponentType<IconButtonProps> = withStyles(theme => ({
  root: {
    color: theme.palette.text.interactiveNormal,
    padding: 0,
    '&:hover': {
      color: theme.palette.text.interactiveHover,
      background: 'transparent',
    },
    '&:active': {
      color: theme.palette.text.interactiveActive,
    },
  },
  colorPrimary: {
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.hover,
    },
    '&:active': {
      color: theme.palette.primary.active,
    },
  },
}))(props => <MuiIconButton disableRipple disableFocusRipple disableTouchRipple {...props} />)

export default IconButton
