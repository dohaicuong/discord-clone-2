import { SvgIconProps, useTheme } from '@material-ui/core'
import { RemoveCircle } from '@material-ui/icons'

const NoDisturbIcon: React.FC<SvgIconProps> = (props) => {
  const theme = useTheme()

  return (
    <RemoveCircle
      {...props}
      style={{
        color: theme.palette.error.main,
        width: 22,
        ...props.style,
      }}
    />
  )
}
export default NoDisturbIcon
