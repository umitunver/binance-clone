import { Container, HorizontalCard, SectionBanner } from '@/components'
import styles from './index.module.scss'
import { NeedHelpData } from '@/data/needHelp'



export default function NeedHelp() {
  return (
    <Container mt={80}>
      <SectionBanner title='Need help?' />
      <div className={styles.contain}>
        {
          NeedHelpData?.map((item, index) => (
            <HorizontalCard variant='needhelp' imageSize={64} key={index} iconPosition='top' title={item?.title} description={item?.description} image={item?.image} linkText={item?.linkText} />
          ))
        }
      </div>
    </Container>
  )
}