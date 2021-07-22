import { Tabs as MuiTabs, withStyles } from '@material-ui/core'

const Tabs = withStyles(theme => ({
  root: {
    minHeight: 0,
  },
  indicator: {
    display: 'none',
  },
}))(MuiTabs)

export default Tabs
