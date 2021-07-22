import {
  Badge as MuiBadge,
  BadgeProps as MuiBadgeProps,
  withStyles
} from '@material-ui/core'
import { ComponentType } from 'react'

type BadgeProps = MuiBadgeProps & {
  size?: number
}

const Badge: ComponentType<BadgeProps> = withStyles({
  badge: {
    border: `4px solid #202225`,
    height: ({ size = 26 }: any) => size,
    width: ({ size = 26 }: any) => size,
    borderRadius: '100%',
  },
})(MuiBadge)

export default Badge
