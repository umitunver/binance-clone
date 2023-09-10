import Image from 'next/image'
import styles from './index.module.scss'
import Images from '@/constants/images'
import { NavigationMenus } from '@/views'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image src={Images.Logo} alt='Logo' width={120} height={24} />
        </div>
        <NavigationMenus />

      </div>
      <div className={styles.right}></div>
    </header>
  )
}