"use client"
import { useState } from 'react'
import styles from './index.module.scss'
import Icon from '@/components/icons'
import { SelectionPopup } from '@/components'
import { LanguageData } from '@/data/languageCurrencyData'
import { CurrencyData } from '@/data/languageCurrencyData'

export default function FooterSelects() {
  const [language, setLanguage] = useState<Boolean>(false)
  const [currency, setCurrency] = useState<Boolean>(false)

  return (
    <div className={styles.contain}>
      <div className={styles.language} onMouseOver={() => {
        setLanguage(true)
      }} onMouseOut={() => { setLanguage(false) }}>
        <Icon icon={'globe'} />
        <span className={styles.text}>English</span>
        <SelectionPopup visible={language} data={LanguageData} />
      </div>

      <div className={styles.language} onMouseOver={() => {
        setCurrency(true)
      }} onMouseOut={() => { setCurrency(false) }}>
        <Icon icon={'cash'} />
        <span className={styles.text}>USD - $</span>
        <SelectionPopup visible={currency} data={CurrencyData} />
      </div>
    </div>
  )
}