import Image from 'next/image'
import styles from './index.module.scss'
import Images from '@/constants/images'
import { Button } from '@/components'

type QrProps = {
  visible?: Boolean,
}
export default function QrDownload(props: QrProps) {
  return (
    <div className={styles.sub} style={{ visibility: props?.visible ? 'visible' : 'hidden' }}>
      <Image src={Images.BinanceQr} width={136} height={136} alt='Binance QR Code' />
      <div className={styles.message}>
        Scan to Download App IOS & Android
      </div>
      <Button title="Download Options" variant='primary' size="sm" mt={12} mb={12} />
    </div>
  )
}

