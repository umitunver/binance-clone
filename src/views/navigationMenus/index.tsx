import Link from 'next/link'
import styles from './index.module.scss'
import { NavigationMenu } from '@/data/navigationMenu'
import { SubMenuCard } from '@/components'

export default function NavigationMenus() {
  return (
    <div className={styles.menu}>
      <ul>
        {
          NavigationMenu?.map((item: any, index) => (
            <li key={index}>
              <Link href={"#"}>{item?.title}</Link>
              {
                item?.group?.length > 0 &&
                <div className={styles.sub_menu}>
                  <div className={styles.group_area}>
                    {
                      item?.group?.map((groupItem: any, groupIndex: any) => (
                        <div className={styles.group} key={groupIndex}>
                          {
                            groupItem?.data?.map((data: any, dataIndex: any) => (
                              <SubMenuCard key={dataIndex} image={data?.image} title={data?.title} description={data?.description} />
                            ))
                          }
                        </div>
                      ))
                    }
                  </div>
                </div>
              }
            </li>
          ))
        }

      </ul>
    </div>
  )
}