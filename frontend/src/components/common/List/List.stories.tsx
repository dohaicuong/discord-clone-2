import { Meta } from '@storybook/react'
import { useState } from 'react'

import {
  ListItemText,
  Avatar, Collapse, Container, Switch
} from '@material-ui/core'
import { Inbox, ChevronRight, KeyboardArrowDown, Add, PersonAdd, RemoveCircle } from '@material-ui/icons'
import { theme } from 'providers/theme'
import Divider from 'components/common/Divider'
import BlobButton from 'components/common/BlobButton'

import List from './List'
import ListItem from './ListItem'
import ListItemIcon from './ListItemIcon'
import ListSubheader from './ListSubheader'
import ListItemSecondaryAction from './ListItemSecondaryAction'
import ListItemAvatar from './ListItemAvatar'
import Badge from '../Badge'
import NoDisturbIcon from '../Badge/NoDisturbIcon'
import IdleIcon from '../Badge/IdleIcon'

export default {
  title: 'Components/List',
  component: List,
} as Meta

export const Default: React.VFC<{}> = () => (
  <Container maxWidth='xs'>
    <List style={{ color: '#72767d', background: theme.palette.background.tertiary, paddingRight: 8 }}>
    <ListItem button>
        <ListItemText primary='Inbox' />
      </ListItem>
      <Divider />

      <ListItem button selected>
        <ListItemText primary='Selected' />
      </ListItem>
      <Divider />

      <ListItem button>
        <ListItemText primary='Inbox' secondary='something' />
      </ListItem>
      <Divider />

      <ListItem button>
        <ListItemIcon>
          <Inbox />
        </ListItemIcon>
        <ListItemText primary='Inbox' />
      </ListItem>
      <Divider />

      <ListItem button>
        <ListItemIcon>
          <Inbox />
        </ListItemIcon>
        <ListItemText primary='Inbox' />
        <ListItemSecondaryAction>
          <Switch />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />

      <ListSubheader>Section 2</ListSubheader>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt='Hatsune Miku' src='https://pbs.twimg.com/profile_images/1326706754164383744/cHB7eqaI.jpg' />
        </ListItemAvatar>
        <ListItemText
          primary='Hatsune Miku'
          secondary='Odds and Ends'
        />
      </ListItem>
    </List>
  </Container>
)

export const BlobList: React.VFC<{}> = () => (
  <Container maxWidth='xs'>
    <List style={{ color: '#72767d', background: theme.palette.background.tertiary, width: 72 }}>
      <ListItem blob dense showSideStatus>
        <BlobButton style={{ margin: 4 }} />
      </ListItem>

      <ListItem blob dense notice showSideStatus>
        <BlobButton style={{ margin: 4 }} />
      </ListItem>

      <Divider variant='middle' />

      <ListItem blob dense selected>
        <BlobButton selected style={{ margin: 4 }} />
      </ListItem>

      <ListItem blob dense selected showSideStatus>
        <BlobButton selected style={{ margin: 4 }} />
      </ListItem>
    </List>
  </Container>
)

export const CollapsibleList: React.VFC<{}> = () => {
  const [open, setOpen] = useState(true)

  return (
    <Container maxWidth='xs'>
      <List
        style={{
          color: '#72767d',
          background: theme.palette.background.tertiary,
          paddingRight: 8,
        }}
        subheader={
          <ListSubheader
            component='div'
            button
            style={{ display: 'flex', alignItems: 'center' }}
            onClick={() => setOpen(pre => !pre)}
          >
            {open
              ? <KeyboardArrowDown style={{ width: 18, height: 18 }} />
              : <ChevronRight style={{ width: 18, height: 18 }} />
            }
            Trò Chuyện Linh Tinh
            <div style={{ flexGrow: 1 }} />
            <ListItemSecondaryAction onClick={e => e.stopPropagation()}>
              <Add />
            </ListItemSecondaryAction>
          </ListSubheader>
        }
      >
        <Collapse in={open} timeout="auto" unmountOnExit>
          <ListItem button dense selected style={{ marginBottom: 4, marginLeft: 4 }}>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary='general' />
            <ListItemSecondaryAction onClick={e => e.stopPropagation()}>
              <PersonAdd style={{ width: 16, height: 16 }} />
            </ListItemSecondaryAction>
          </ListItem>
          
          <ListItem button dense style={{ marginBottom: 4, marginLeft: 4 }}>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary='opportunites' />
          </ListItem>

          <ListItem button dense style={{ marginBottom: 4, marginLeft: 4 }}>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary='news' />
          </ListItem>
        </Collapse>
      </List>
    </Container>
  )
}

export const UserList: React.VFC<{}> = () => {
  return (
    <Container maxWidth='xs'>
      <List
        style={{
          color: '#72767d',
          background: theme.palette.background.tertiary,
          paddingRight: 8,
        }}
        subheader={
          <ListSubheader
            component='div'
          >
            ADMIN
          </ListSubheader>
        }
      >
        <ListItem button>
          <ListItemAvatar>
            <Badge
              color='success'
              badgeContent=''
              size={20}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                style={{ width: 32, height: 32 }}
                alt='Hatsune Miku'
                src='https://pbs.twimg.com/profile_images/1326706754164383744/cHB7eqaI.jpg'
              />
            </Badge>
          </ListItemAvatar>
          <ListItemText primary='Hatsune Miku' />
        </ListItem>

        <ListItem button>
          <ListItemAvatar>
            <Badge
              size={20}
              badgeContent={<NoDisturbIcon style={{ width: 16 }} />}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                style={{ width: 32, height: 32 }}
                alt='Hatsune Miku'
                src='https://pbs.twimg.com/profile_images/1326706754164383744/cHB7eqaI.jpg'
              />
            </Badge>
          </ListItemAvatar>
          <ListItemText primary='Hatsune Miku' />
        </ListItem>

        <ListItem button>
          <ListItemAvatar>
            <Badge
              size={20}
              badgeContent={<IdleIcon style={{ width: 16 }} />}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                style={{ width: 32, height: 32 }}
                alt='Hatsune Miku'
                src='https://pbs.twimg.com/profile_images/1326706754164383744/cHB7eqaI.jpg'
              />
            </Badge>
          </ListItemAvatar>
          <ListItemText primary='Hatsune Miku' />
        </ListItem>
      </List>
    </Container>
  )
}