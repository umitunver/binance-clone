import { Button, Container, HorizontalCard, SectionBanner } from '@/components'
import styles from './index.module.scss'
import Image from 'next/image'
import Images from '@/constants/images'

export default function EasySteps() {
  return (
    <Container mt={80}>
      <div className={styles.contain}>
        <div className={styles.left}>
          <SectionBanner title='Build your crypto portfolio' description='Start your first trade with these easy steps.' />
          <HorizontalCard image='Kyc' title='Verify your identity' description='Complete the identity verification process to secure your account and transactions.' variant='easy' />
          <HorizontalCard image='User' title='Fund your account' description='Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods.' variant='easy' />
          <HorizontalCard image='Spot' title='Start trading' description="You're good to go! Buy/sell crypto, set up recurring buys for your investments, and discover what Binance has to offer." variant='easy' />
          <Button title='Get Started' variant='primary' />
        </div>
        <div className={styles.right}>
          <Image src={Images.PortfolioSection} height={676} width={335} alt='phone' />
        </div>

      </div>
    </Container>
  )
}