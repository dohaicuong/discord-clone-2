import {
  ToggleButton as MuiToggleButton,
  ToggleButtonProps as MuiToggleButtonProps
} from '@material-ui/lab'
import { withStyles } from '@material-ui/core'
import { ComponentType } from 'react'

type OmitProps = 'disableRipple' | 'disableTouchRipple' | 'disableFocusRipple'
type ToggleButtonProps = Omit<MuiToggleButtonProps, OmitProps>

const ToggleButton: ComponentType<ToggleButtonProps> = withStyles(theme => ({
  root: {
    padding: 6,
    border: 'none',
    borderRadius: 4,
    color: theme.palette.text.interactiveNormal,
    '&:hover': {
      color: theme.palette.text.interactiveHover,
    },
  },
  label: {
    width: 20,
    height: 20,
  }
}))(props => <MuiToggleButton disableRipple disableTouchRipple disableFocusRipple {...props} />)

export default ToggleButton
