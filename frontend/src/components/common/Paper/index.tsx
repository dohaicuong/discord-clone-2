import { Paper as MuiPaper, withStyles } from '@material-ui/core'

const Paper = withStyles(theme => ({
  root: {
    color: '#72767d',
    backgroundColor: theme.palette.background.mobilePrimary,
    borderRadius: 5,
  },
}))(MuiPaper)

export default Paper
