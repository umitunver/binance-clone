
import styles from './index.module.scss'
import { SelectionPopup } from '@/components'
import Icon from '@/components/icons'
import { CurrencyData, LanguageData } from '@/data/languageCurrencyData'

type QrProps = {
  visible?: Boolean,
}
export default function LanguageAndCurrency(props: QrProps) {
  console.log("visible", props?.visible)
  return (
    <div className={styles.sub} style={{ visibility: props?.visible ? 'visible' : 'hidden' }}>
      <div className={styles.language}>
        <Icon icon={'globe'} />
        <span className={styles.text}>English</span>
        <SelectionPopup visible={true} data={LanguageData} />
      </div>

      <div className={styles.language}>
        <Icon icon={'cash'} />
        <span className={styles.text}>USD - $</span>
        <SelectionPopup visible={true} data={CurrencyData} />
      </div>
    </div>
  )
}

