import Image from 'next/image'
import styles from './index.module.scss'
import Images from '@/constants/images'
import { wordSlice } from '@/utils/helper'
import Icon from '@/components/icons'

type FeedProps = {
  data: any
}
export default function FeedCard({ data }: FeedProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Icon icon={'triangleIcon'} width={50} height={60} />
      </div>
      <div>
        <div className={styles.user}>
          <Image className={styles.thumbnail} src={Images[data?.thumbnail]} width={32} height={32} alt='user' />
          <div className={styles.publisher}>{data?.publisher}</div>
        </div>
        <div className={styles.description}>
          {wordSlice(data?.description, 50)}
        </div>
        <div className={styles.created_date}>
          13 hours ago
        </div>
      </div>
    </div>
  )
}