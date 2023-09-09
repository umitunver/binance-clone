import { AppLayout, Container } from '@/components'
import styles from './page.module.css'
import { Hero, HomeFeed, PopularCryptocurrencies } from '@/views'
import HomeSlider from '@/views/homeSlider'

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <HomeSlider />
      <PopularCryptocurrencies />
      <HomeFeed />
    </AppLayout>
  )
}
