import { Container } from '@material-ui/core'
import { Meta } from '@storybook/react'

import Button from '.'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const variants = ['text', 'contained', 'outlined']
const colors = ['default', 'primary', 'error'] // 'secondary'
const sizes = ['small', 'medium', 'large']

export const Primary: React.VFC<{}> = () => (
  <Container maxWidth='sm'>
    {variants.map((variant, i) => (
      <div>
        {colors.map((color, j) => (
          <div>
            {sizes.map((size, k) => (
              <Button
                key={`${i}_${j}_${k}`}
                variant={variant as any}
                color={color as any}
                style={{ margin: 4 }}
                size={size as any}
              >
                Click
              </Button>
            ))}
          </div>
        ))}
      </div>
    ))}
  </Container>
)