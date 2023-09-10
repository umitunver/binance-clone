import Icon from '@/components/icons'
import styles from './index.module.scss'
import Image from 'next/image'
import Images from '@/constants/images'

type CardProps = {
  image: string,
  title?: string,
}
export default function SearchCard(props: CardProps) {
  return (
    <div className={styles.card}>
      <Image src={Images[props?.image]} width={24} height={24} alt='icon' />
      <div className={styles.title}>
        {props?.title}
      </div>
    </div>
  )
}