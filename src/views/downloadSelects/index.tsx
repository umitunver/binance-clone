import { Container, DownloadCard, SectionBanner } from '@/components'
import styles from './index.module.scss'
import Image from 'next/image'
import Images from '@/constants/images'
import Icon from '@/components/icons'
import { DownloadSelectData } from '@/data/downloadSelect'

export default function DownloadSelects() {
  return (
    <Container mt={80}>
      <SectionBanner title='Trade on the go. Anywhere, anytime.' description='Stay in the know with our app and desktop client.' linkText='More download options' />
      <div className={styles.contain}>
        <Image src={Images.DownloadSection} width={550} height={330} alt='Download Section' />
        <div className={styles.selection}>

          <div className={styles.qr_area}>
            <Icon icon={'BinanceQr'} />
            <div className={styles.right}>
              <div className={styles.qr_title}>Scan to Download</div>
              <div className={styles.qr_desc}>iOS & Android</div>
            </div>
          </div>

          <div className={styles.download_select}>
            {
              DownloadSelectData?.map((item, index) => (
                <DownloadCard key={index} title={item?.title} icon={item?.icon} />
              ))
            }
          </div>
        </div>
      </div>
    </Container>
  )
}