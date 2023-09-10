import { AppLayout, Container } from '@/components'
import { CryptoExchange, DownloadSelects, EasySteps, ExploreEndless, Hero, HomeFeed, NeedHelp, PopularCryptocurrencies, StartEarning, TokenRewards } from '@/views'
import HomeSlider from '@/views/homeSlider'

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <HomeSlider />
      <PopularCryptocurrencies />
      <HomeFeed />
      <TokenRewards />
      <EasySteps />
      <ExploreEndless />
      <CryptoExchange />
      <DownloadSelects />
      <NeedHelp />
      <StartEarning />
    </AppLayout>
  )
}
