import {
  ListSubheader as MuiListSubheader,
  ListSubheaderProps as MuiListSubheaderProps,
  withStyles,
} from '@material-ui/core'
import { ComponentType } from 'react'

type ListSubheaderProps = Omit<MuiListSubheaderProps, 'component'> & {
  component: any
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
      color: theme.palette.text.interactiveHover,
    }
  },
}))(MuiListSubheader)

export default ListSubheader
