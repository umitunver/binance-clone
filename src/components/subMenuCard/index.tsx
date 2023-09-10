import Image from 'next/image'
import styles from './index.module.scss'
import Images from '@/constants/images'
import Link from 'next/link'
import Icon from '../icons'

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
      <div className={styles.sub_image}>
        <Image src={Images[props?.image]} height={24} width={24} alt='Step' />
      </div>

      <div>
        <div className={styles.title}>
          {props?.title}
          <div className={styles.arrow_icon}>
            <Icon icon={'arrowRight'} />
          </div>
        </div>

        <p className={styles.description}>{props?.description}</p>
        {
          props?.linkText && <Link href={"#"} className={styles.button}>{props?.linkText}</Link>
        }
      </div>

    </div>
  )
}