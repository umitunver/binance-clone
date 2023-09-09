import { Button, Container } from '@/components'
import styles from './index.module.scss'

export default function StartEarning() {
  return (
    <div className={styles.contain}>
      <Container>
        <div className={styles.inner}>
          <h3 className={styles.title}>Start earning today</h3>
          <Button title='Sign Up Now' variant='primary' mt={30} />
        </div>
      </Container>
    </div>
  )
}