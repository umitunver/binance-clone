import Image from 'next/image'
import styles from './index.module.scss'
import Images from '@/constants/images'


type CardProps = {
  title: string,
  description: string,
  image: string,
  position: any
}
export default function ExploreCard(props: CardProps) {
  return (
    <div className={styles.card}>
      {props?.position === "top" && <Image src={Images[props?.image]} width={336} height={217} alt={props?.title} />}
      <div>
        <div className={styles.title}>{props?.title}</div>
        <p className={styles.description}>{props?.description}</p>
      </div>
      {props?.position === "bottom" && <Image src={Images[props?.image]} width={336} height={217} alt={props?.title} />}
    </div>
  )
}