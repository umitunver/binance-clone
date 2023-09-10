"use client"
import Image from 'next/image'
import styles from './index.module.scss'
import Images from '@/constants/images'
import { HeaderSearch, NavigationMenus, QrDownload } from '@/views'
import Icon from '@/components/icons'
import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from 'next-themes'


export default function Header() {
  const [search, setSearch] = useState<Boolean>(false)
  const [qrDownload, setQrDownload] = useState<Boolean>(false)
  const [globe, setGlobe] = useState<Boolean>(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image src={Images.Logo} alt='Logo' width={120} height={24} />
        </div>
        <NavigationMenus />

      </div>
      <div className={styles.right}>
        <ul>
          <li
            onMouseOver={() => { setSearch(true) }} onMouseOut={() => { setSearch(false) }}
          >
            <div className={styles.element}>
              <Icon icon={'search'} />
            </div>
            <div className={styles.sub}>
              <HeaderSearch visible={search} />
            </div>
          </li>
          <li>
            <div className={styles.element}>
              <span className={styles.text}>Log In</span>
            </div>
          </li>
          <li>
            <div className={styles.element}>
              <Link href={"#"} className={`${styles.button}`}>
                <Icon icon={'gift'} />
                Register
              </Link>
            </div>
          </li>
          <li
            onMouseOver={() => { setQrDownload(true) }} onMouseOut={() => { setQrDownload(false) }}
          >
            <div className={styles.element}>
              <Icon icon={'qrDownload'} />
            </div>
            <div className={styles.sub}>
              <QrDownload visible={qrDownload} />
            </div>
          </li>
          <li
            onMouseOver={() => { setGlobe(true) }} onMouseOut={() => { setGlobe(false) }}
          >
            <div className={styles.element}>
              <Icon icon={'globe'} />
            </div>
            <div className={styles.sub}>
              {/* <LanguageAndCurrency visible={globe} /> */}
            </div>
          </li>
          <li>
            <div className={styles.element} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              <Icon icon={theme === 'light' ? 'darkMode' : 'lightMode'} />
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}