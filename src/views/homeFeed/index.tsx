import { Button, Container, FeedCard, SectionBanner } from '@/components'
import styles from './index.module.scss'
import Image from 'next/image'
import Images from '@/constants/images'
import { FeedData } from '@/data/feedData'
export default function HomeFeed() {
  return (

    <Container mt={100}>
      <SectionBanner title='Trending on Binance Feed' description='Discover the latest crypto news and feed from news media and influencers.' linkText='View more' />
      <div className={styles.contain}>
        <div className={styles.feeds}>
          {
            FeedData?.map((item, index) => (
              <FeedCard key={index} data={item} />
            ))
          }
        </div>
        <div className={styles.community_card}>
          <Image src={Images.FeedEntryPc} width={312} height={242} alt='Community' />
          <div className={styles.in}>
            <div className={styles.title}>{"World's largest crypto community"}</div>
            <Button title="Explore Now" variant="primary" />
          </div>
        </div>
      </div>
    </Container>
  )
}