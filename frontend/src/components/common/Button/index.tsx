import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  withStyles,
} from '@material-ui/core'
import { ComponentType } from 'react'

export type ButtonProps = Omit<MuiButtonProps, 'disableRipple' | 'disableFocusRipple' | 'disableTouchRipple' | 'color'> & {
  color?: 'inherit' | 'primary' | 'secondary' | 'default' | 'error'
}

const Button: ComponentType<ButtonProps> = withStyles(theme => ({
  text: {
    // @ts-ignore
    color: ({ color }) => color !== 'default' ? theme.palette[color]?.main : theme.palette[color]?.contrastText,
    '&:hover': {
      background: 'transparent',
      textDecoration: 'underline',
    }
  },
  contained: {
    // @ts-ignore
    background: ({ color }) => theme.palette[color]?.main,
    // @ts-ignore
    color: ({ color }) => theme.palette[color]?.contrastText,
    '&:hover': {
      // @ts-ignore
      background: ({ color }: any) => theme.palette[color]?.hover,
    },
    '&:active': {
      // @ts-ignore
      background: ({ color }) => theme.palette[color]?.active,
    }
  },
  outlined: {
    // @ts-ignore
    color: ({ color }) =>  theme.palette[color]?.light,
    // @ts-ignore
    border: ({ color }) =>  `1px solid ${theme.palette[color]?.dark}`,
    '&:hover': {
      // @ts-ignore
      background: 'transparent'
    },
    '&:active': {
      // @ts-ignore
      background: ({ color }) => theme.palette[color]?.outlineActive ?? 'transparent'
    },
  },

  root: {
    padding: '2px 16px',
    '& > .MuiButton-label': {
      height: 34,
      fontSize: 14,
    },
  },
  sizeLarge: {
    '& > .MuiButton-label': {
      height: 40,
      fontSize: 16,
    },
  },
  sizeSmall: {
    '& > .MuiButton-label': {
      height: 28,
      fontSize: 14,
    },
  },
}))((props) => {
  return (
    <MuiButton
      disableRipple
      disableFocusRipple
      disableTouchRipple
      {...props}
    />
  )
})

export default Button
