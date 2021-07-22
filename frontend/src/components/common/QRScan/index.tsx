import QrReader from 'react-qr-reader'
import { makeStyles } from '@material-ui/core'
import useComponentSize from '@rehooks/component-size'
import { useRef } from 'react'
import { useMemo } from 'react'

type QRScanProps = {
  viewFinderSize?: number
  onError?: (error: any) => void
  onScan?: (data: string | null) => void
}

const QRScan: React.FC<QRScanProps> = ({
  viewFinderSize = 100,
  onError = () => {},
  onScan = () => {},
}) => {
  const classes = useStyles()

  const rootRef = useRef<HTMLDivElement | null>(null)
  const { height } = useComponentSize(rootRef)
  const borderSize = useMemo(() => (height / 2) - viewFinderSize, [height])

  return (
    <div ref={rootRef} className={classes.root}>
      <div
        className={classes.outer}
        style={{
          border: `${borderSize}px solid #00000060`
        }}
      >
        <div className={classes.inner} />
      </div>
      <QrReader
        delay={300}
        onError={onError}
        onScan={onScan}
        showViewFinder={false}
      />
    </div>
  )
}

export default QRScan

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  outer: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    zIndex: 1,
  },
  inner: {
    width: '100%',
    height: '100%',
    border: '2px solid #fff',
    borderRadius: 10,
    marginTop: '-2px',
    marginLeft: '-2px',
  }
})