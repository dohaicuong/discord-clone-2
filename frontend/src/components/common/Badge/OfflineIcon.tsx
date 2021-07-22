import { SvgIconProps, useTheme } from '@material-ui/core'
import { TripOrigin } from '@material-ui/icons'

const OfflineIcon: React.FC<SvgIconProps> = (props) => {
  const theme = useTheme()

  return (
    <TripOrigin
      {...props}
      style={{
        color: theme.palette.default.main,
        width: 22,
        ...props.style,
      }}
    />
  )
}
export default OfflineIcon
