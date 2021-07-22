import {
  Badge as MuiBadge,
  BadgeProps as MuiBadgeProps,
  withStyles
} from '@material-ui/core'
import clsx from 'clsx'
import { ComponentType } from 'react'

type BadgeProps = Omit<MuiBadgeProps, 'color'> & {
  size?: number
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'success'
}

const Badge: ComponentType<BadgeProps> = withStyles(theme => ({
  badge: {
    border: `4px solid #202225`,
    height: ({ size = 26 }: any) => size,
    width: ({ size = 26 }: any) => size,
    borderRadius: '100%',
  },
  colorSuccess: {
    background: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
}))(({
  classes: {
    // @ts-ignore
    colorSuccess,
    ...classes
  },

  color,
  ...props
}: BadgeProps) => {
  return (
    <MuiBadge
      color={color as any}
      classes={{
        ...classes,
        badge: clsx(
          classes.badge,
          color === 'success' ? colorSuccess : ''
        )
      }}
      {...props}
    />
  )
})

export default Badge
