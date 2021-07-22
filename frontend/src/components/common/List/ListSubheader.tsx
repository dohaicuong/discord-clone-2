import {
  ListSubheader as MuiListSubheader,
  ListSubheaderProps as MuiListSubheaderProps,
  withStyles,
} from '@material-ui/core'
import { ComponentType } from 'react'

type ListSubheaderProps = Omit<MuiListSubheaderProps, 'component'> & {
  component?: any
  button?: boolean
}

// @ts-ignore
const ListSubheader: ComponentType<ListSubheaderProps> = withStyles(theme => ({
  root: {
    lineHeight: '24px',
    paddingLeft: 8,
    paddingRight: 0,
    color: theme.palette.text.channelDefault,
    cursor: 'pointer',
    '&:hover': {
      color: ({ button }: any) => button 
        ? theme.palette.text.interactiveHover
        : theme.palette.text.channelDefault,
    }
  },
}))(MuiListSubheader)

export default ListSubheader
