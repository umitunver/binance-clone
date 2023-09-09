import { Button, Container, SectionBanner } from '@/components'
import styles from './index.module.scss'
import { ExploreData } from '@/data/explore'
import ExploreCard from '@/components/card/exploreCard'
export default function ExploreEndless() {
  return (
    <Container mt={80}>
      <SectionBanner title='Explore endless possibilities with Binance' />
      <div className={styles.contain}>
        {
          ExploreData?.map((item, index) => (
            <ExploreCard key={index} title={item?.title} description={item?.description} image={item?.image} position={item?.position} />
          ))
        }
      </div>
      <Button title='Explore Now' variant='primary' mt={60} />
    </Container>
  )
}