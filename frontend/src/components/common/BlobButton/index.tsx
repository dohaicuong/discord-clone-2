import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import DiscordLogo from 'assets/DiscordLogo'

export type BlobButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  color?: 'default' | 'primary' | 'secondary' | 'error'
  image?: string | JSX.Element
  icon?: React.ReactNode
  title?: string
  textColor?: string
  selected?: boolean
}

const BlobButton: React.FC<BlobButtonProps> = (props) => {
  const {
    image,
    icon = <DiscordLogo />,
    title,
    selected = false,
    color = 'default',
    textColor,
    ...rest
  } = props
  const classes = useStyles(props)

  return (
    <button
      className={clsx(
        classes.button,
        selected && classes.buttonSelected
      )}
      {...rest}
    >
      {!image && icon}
    </button>
  )
}
export default BlobButton

const useStyles = makeStyles(theme => ({
  button: ({ color = 'default', image, textColor: defaultTextColor }: BlobButtonProps) => {
    const currentColor = theme.palette[color]
    const textColor = '#fff'

    return {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 48,
      width: 48,
      cursor: 'pointer',
      transition: 'all 300ms ease-in-out',
      border: 'none',
      borderRadius: '100%',
      backgroundColor: '#36393f',
      color: 
        defaultTextColor
        || (color === 'default' ? currentColor.contrastText : currentColor.main),
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      '&:hover': {
        backgroundColor: currentColor.main,
        color: textColor,
        borderRadius: '1rem',
      },
      '&:focus': {
        backgroundColor: currentColor.main,
        color: textColor,
        borderRadius: '1rem',
        outline: 'none',
      },
    }
  },
  buttonSelected: ({ color = 'default' }: BlobButtonProps) => {
    const currentColor = theme.palette[color]
    const textColor = '#fff'

    return {
      backgroundColor: currentColor.main,
      color: textColor,
      borderRadius: '1rem',
    }
  },
  popover: {
    pointerEvents: 'none',
  },
  popoverPaper: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}))