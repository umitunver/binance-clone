import Image from 'next/image'
import styles from './index.module.scss'
import Images from '@/constants/images'
import Link from 'next/link'

type StepProps = {
  image: string,
  title: string,
  description: string,
  variant?: string,
  linkText?: string,
  iconPosition?: 'top' | 'center',
  imageSize?: number
}
export default function HorizontalCard(props: StepProps) {
  return (
    <div className={styles.card} data-position={props?.iconPosition || 'center'}>
      <Image src={Images[props?.image]} height={props?.imageSize || 80} width={props?.imageSize || 80} alt='Step' />
      <div>
        <div className={styles.title} data-fontsize={props?.variant}>{props?.title}</div>
        <p className={styles.description} data-fontsize={props?.variant}>{props?.description}</p>
        {
          props?.linkText && <Link href={"#"} className={styles.button}>{props?.linkText}</Link>
        }
      </div>

    </div>
  )
}