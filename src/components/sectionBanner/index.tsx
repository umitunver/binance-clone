import Link from 'next/link';
import styles from './index.module.scss'
import Icon from '@/components/icons'
type SectionProps = {
  title?: string;
  description?: string;
  linkText?: string;
}
export default function SectionBanner({ ...props }: SectionProps) {
  return (
    <div className={styles.contain}>
      <div>
        <div className={styles.title}>{props?.title}</div>
        {
          props?.description && <div className={styles.description}>{props?.description}</div>
        }
      </div>
      {
        props?.linkText && <Link href={'#'} className={styles.link}>
          <span className={styles.link_text}>{props?.linkText}</span>
          <Icon icon={'chevronRight'} width={16} height={16} fill='#929AA5' />
        </Link>
      }
    </div>
  )
}