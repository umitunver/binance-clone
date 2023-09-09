import { AppLayout, Container } from '@/components'
import styles from './page.module.css'
import { Hero } from '@/views'

export default function Home() {
  return (
    <AppLayout>
      <Hero />
    </AppLayout>
  )
}
