import Image from 'next/image'
import styles from './index.module.scss'
import Images from '@/constants/images';
import Icon from '@/components/icons';


type CardProps = {
  range: string;
  image: string;
  symbol: string;
}


export default function TokenCard(props: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.token_name}>APR</div>
      <div className={styles.range}>{props?.range}</div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <Image className={styles.image} src={Images[props?.image]} width={32} height={32} alt='crypto' />
          <div className={styles.symbol}>{props?.symbol}</div>
        </div>
        <div className={styles.icon_box}>
          <Icon icon={"chevronRight"} width={24} height={24} fill='#929AA5' />
        </div>
      </div>
    </div>
  )
}