import { ComponentType } from 'react'
import {
  Tab as MuiTab,
  TabProps as MuiTabProps,
  withStyles
} from '@material-ui/core'

type OmitProps = 'disableFocusRipple' | 'disableTouchRipple' | 'disableRipple'
type TabProps = Omit<MuiTabProps, OmitProps>

const Tab: ComponentType<TabProps> = withStyles(theme => ({
  root: {
    minWidth: 0,
    minHeight: 0,
    padding: '2px 8px',
    margin: '0 8px',

    color: theme.palette.text.interactiveNormal,
    '&:hover': {
      color: theme.palette.text.interactiveHover,
      background: theme.palette.background.modifierHover,
    },
    '&:active': {
      color: theme.palette.text.interactiveActive,
      background: theme.palette.background.modifierActive,
    },
  },
  selected: {
    color: theme.palette.text.interactiveActive,
    background: theme.palette.background.modifierSelected
  },
}))(props => <MuiTab disableFocusRipple disableTouchRipple disableRipple {...props} />)

export default Tab
