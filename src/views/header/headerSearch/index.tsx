import Icon from '@/components/icons'
import styles from './index.module.scss'
import { SearchData } from '@/data/searchData'
import { SearchCard } from '@/components'

type HeaderProps = {
  visible?: Boolean,
}
export default function HeaderSearch(props: HeaderProps) {
  return (
    <div className={styles.sub} style={{ visibility: props?.visible ? 'visible' : 'hidden' }}>
      <div className={styles.search_group}>
        <div className={styles.left}>
          <Icon icon={'search'} />
          <div className={styles.input_area}>
            <input className={styles.search_input} placeholder='Coin, Function, Announcement' />
          </div>
        </div>
        <span>Cancel</span>
      </div>
      <div className={styles.list_area}>
        <h4>Hot Function</h4>
        <div className={styles.list}>
          {
            SearchData?.map((item, index) => (
              <SearchCard key={index} image={item?.image} title={item?.title} />
            ))
          }
        </div>
      </div>
    </div>
  )
}