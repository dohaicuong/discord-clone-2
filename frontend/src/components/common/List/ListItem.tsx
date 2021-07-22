import { ComponentType } from 'react'
import {
  ListItem as MuiListItem,
  ListItemProps as MuiListItemProps,
  withStyles
} from '@material-ui/core'
import clsx from 'clsx'

type ListItemProps = Omit<MuiListItemProps, 'divider'> & {
  blob?: boolean
  
  showSideStatus?: boolean
  notice?: boolean
  selected?: boolean
}

const ListItem: ComponentType<ListItemProps> = withStyles(theme => ({
  root: {
    paddingLeft: ({ blob }: any) => blob ? 0 : 8,
    paddingRight: ({ blob }: any) => blob ? 0 : 8,
    justifyContent: 'center',
    color: theme.palette.text.channelDefault,
  },
  button: {
    '&:hover': {
      background: theme.palette.background.modifierHover,
      borderRadius: 8,
      borderColor: 'transparent',
      color: theme.palette.text.interactiveHover,
    }
  },
  selected: {
    color: theme.palette.text.normal,
    backgroundColor: `${theme.palette.background.modifierSelected} !important`,
    borderRadius: 8,
    borderColor: 'transparent',
  },
  dense: {
    paddingTop: 2,
    paddingBottom: 2,
  },

  wrapper: {
    position: 'relative',
    paddingLeft: 8,
  },
  wrapper_showSideStatus: {
    '&:hover $sideStatus': {
      height: 20,
    },
    '&:active $sideStatus': {
      height: 40,
    },
  },
  sideStatusWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 5,
    height: '100%',
  },

  sideStatus: {
    display: 'block',
    backgroundColor: theme.palette.common.white,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    height: 0,
    width: 4,
    transition: 'height 50ms ease-in-out'
  },
  status_notice: {
    height: 8,
  },
  status_selected: {
    height: '40px !important',
  }
}))(({
  classes: {
    wrapper,
    wrapper_showSideStatus,
    sideStatusWrapper,
    sideStatus,
    status_notice,
    status_selected,
    ...classes
  },

  blob,
  showSideStatus,
  notice,
  selected = false,
  ...props
}: any) => (
  <div
    className={clsx(
      wrapper,
      showSideStatus ? wrapper_showSideStatus : '',
    )}
  >
    <div className={sideStatusWrapper}>
      <span
        className={clsx(
          sideStatus,
          showSideStatus && notice ? status_notice : '',
          showSideStatus && selected ? status_selected : '',
        )}
      />
    </div>
    <MuiListItem classes={classes} selected={blob ? false : selected} {...props} />
  </div>
))

export default ListItem
