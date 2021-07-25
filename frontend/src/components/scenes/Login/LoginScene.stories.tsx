import { Meta } from '@storybook/react'

import LoginScene from '.'
import LoginSceneForm from './LoginForm'

export default {
  title: 'Scenes/LoginScene',
  component: LoginScene,
} as Meta

export const Default: React.VFC<{}> = () => <LoginScene />

export const LoginForm: React.VFC<{}> = () => <LoginSceneForm />