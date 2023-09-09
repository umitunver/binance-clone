import styles from './index.module.scss'

type CardProps = {
  title: string,
  description: string
}
export default function HeroCounterCard({ ...props }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{props?.title}</div>
      <div className={styles.description}>{props?.description}</div>
    </div>
  )
}