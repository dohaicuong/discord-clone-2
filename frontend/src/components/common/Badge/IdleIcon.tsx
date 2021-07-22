import { SvgIconProps, useTheme } from '@material-ui/core'
import { NightsStay } from '@material-ui/icons'

const IdleIcon: React.FC<SvgIconProps> = (props) => {
  const theme = useTheme()

  return (
    <NightsStay
      {...props}
      style={{
        color: theme.palette.warning.main,
        width: 22,
        ...props.style,
      }}
    />
  )
}
export default IdleIcon
