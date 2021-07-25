import { useState } from 'react'
import { Typography, TypographyProps } from '@material-ui/core'

import Link from 'components/common/Link'
import { useMaskedText, useMaskedTextOptions } from './useMaskedText'

export type RevealableTextProps = TypographyProps & useMaskedTextOptions

const RevealableText: React.FC<RevealableTextProps> = ({
  text,
  showingCharacters,
  ...props
}) => {
  const [isShowing, setIsShowing] = useState(false)
  const maskedText = useMaskedText({ text, showingCharacters })

  return (
    <Typography {...props}>
      {isShowing ? text : maskedText}
      {' '}
      <Link onClick={() => setIsShowing(pre => !pre)}>
        {isShowing ? 'Hide' : 'Reveal'}
      </Link>
    </Typography>
  )
}

export default RevealableText
