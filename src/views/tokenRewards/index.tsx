import { Button, Container, CryptoCard, SectionBanner } from '@/components'
import styles from './index.module.scss'
import { RewardsData } from '@/data/rewardsData'

export default function TokenRewards() {
  return (
    <Container mt={80}>
      <SectionBanner title='Earn daily rewards on your idle tokens' description='Simple & Secure. Search popular coins and start earning.' />
      <div className={styles.contain}>
        {
          RewardsData?.map((item, index) => (
            <CryptoCard key={index} symbol={item?.symbol} image={item?.image} range={item?.range} />
          ))
        }

        <Button title='Start To Earn' mt={20} variant='primary' />
      </div>
    </Container>
  )
}