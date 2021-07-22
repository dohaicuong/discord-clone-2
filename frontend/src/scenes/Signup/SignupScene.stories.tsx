import { Meta } from '@storybook/react'

import SignupScene from '.'
import SignupSceneForm from './SignupForm'

export default {
  title: 'Scenes/SignupScene',
  component: SignupScene,
} as Meta

export const Default: React.VFC<{}> = () => <SignupScene />

export const SignupForm: React.VFC<{}> = () => <SignupSceneForm />