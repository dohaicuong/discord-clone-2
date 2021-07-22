import { CSSProperties } from '@material-ui/core/styles/withStyles'
import QRCodeCore from 'qrcode.react'
import discordLogo from './qr_logo.png'

export type QRCodeProps = {
  value: string
  logo?: string
  style?: CSSProperties
}

const QRCode: React.FC<QRCodeProps> = ({
  value,
  logo = discordLogo,
  style,
}) => {
  return (
    <div
      style={{
        width: 176,
        height: 176,
        padding: 8,
        borderRadius: 4,
        background: '#fff',
        ...style
      }}
    >
      <QRCodeCore
        value={value}
        size={176}
        imageSettings={{
          src: logo,
          width: 40,
          height: 40,
        }}
      />
    </div>
  )
}
export default QRCode
