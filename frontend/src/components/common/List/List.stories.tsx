import { Container, Switch } from '@material-ui/core'
import { Meta } from '@storybook/react'

import {
  List,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core'
import { Inbox } from '@material-ui/icons'
import { theme } from 'providers/theme'
import Divider from 'components/common/Divider'
import BlobButton from 'components/common/BlobButton'
import ListItem from './ListItem'

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


// icon, avatar spacing ???
// size ???
export const CollapsibleList: React.VFC<{}> = () => {
  return (
    <Container maxWidth='xs'>
      <List
        style={{ color: '#72767d', background: theme.palette.background.tertiary, paddingRight: 8 }}
        subheader={
          <ListSubheader component='div'>
            Trò Chuyện Linh Tinh
          </ListSubheader>
        }
      >
        <ListItem button dense>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary='general' />
        </ListItem>
      </List>
    </Container>
  )
}