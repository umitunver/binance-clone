import { Button, Container, HorizontalCard, SectionBanner } from '@/components'
import styles from './index.module.scss'
import Image from 'next/image'
import Images from '@/constants/images'
import { CryptoExchangeInfo } from '@/data/cryptoExchangeInfo'

export default function CryptoExchange() {
  return (
    <Container mt={80}>
      <SectionBanner title='Your trusted crypto exchange' description='Here at Binance, we are committed to user protection with strict protocols and industry-leading technical measures.' linkText='View more' />
      <div className={styles.contain}>
        <div>
          {
            CryptoExchangeInfo?.map((item, index) => (
              <HorizontalCard key={index} title={item?.title} description={item?.description} image={item?.image} variant='exchange' />
            ))
          }
        </div>
        <div>
          <Image src={Images.TrustedSection} width={588} height={330} alt='trusted section' />
        </div>
      </div>
      <Button title='Get Started' variant='primary' mt={25} />
    </Container>
  )
}