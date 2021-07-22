import { Typography as MuiTypography, withStyles } from '@material-ui/core'

const Typography = withStyles(theme => ({
  h3: {
    fontSize: 24,
    lineHeight: '30px',
    fontWeight: 600,
    color: theme.palette.header.primary,
    // margin-bottom: 8px;
  },
  subtitle1: {
    fontSize: 16,
    lineHeight: '20px',
    color: theme.palette.header.secondary,
  },
  body2: {
    fontSize: 14,
    lineHeight: '16px',
  },
}))(MuiTypography)

export default Typography
