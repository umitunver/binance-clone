import Icon from '@/components/icons'
import styles from './index.module.scss'

type CardProps = {
  icon: string,
  title: string
}
export default function DownloadCard(props: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.in}>
        <Icon icon={props?.icon} />
        <div className={styles.title}>
          {props?.title}
        </div>
      </div>
    </div>
  )
}