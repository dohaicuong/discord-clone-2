import { Badge as MuiBadge, withStyles } from '@material-ui/core'

const Badge = withStyles({
  badge: {
    border: `4px solid #202225`,
    height: 26,
    borderRadius: '100%',
  },
})(MuiBadge)

export default Badge
