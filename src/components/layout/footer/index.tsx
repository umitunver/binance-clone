import { FooterMenuData } from '@/data/footerMenu'
import Container from '../container'
import styles from './index.module.scss'
import Link from 'next/link'
import FooterSelects from '@/views/footerSelects'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.group}>
            <div className={styles.group_sub}>
              <h3>Community</h3>
              <ul className={styles.community_list}>
                {
                  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]?.map((item, index) => (
                    <li key={index} className={styles.community_test}>
                      <div className={styles.fake_icon}></div>
                    </li>
                  ))
                }
              </ul>
              <FooterSelects />
            </div>
          </div>
          {
            FooterMenuData?.map((group, index) => (
              <div key={index} className={styles.group}>
                {
                  group?.sub?.map((sub, subIndex) => (
                    <div key={subIndex} className={styles.group_sub} style={{ marginTop: subIndex > 0 ? '40px' : 0 }}>
                      <h3>{sub?.title}</h3>
                      <ul>
                        {
                          sub?.data?.map((data, dataIndex) => (
                            <li key={dataIndex}>
                              <Link href={"#"}>
                                {data?.title}
                              </Link>
                            </li>
                          ))
                        }

                      </ul>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
        <div className={styles.copyright}>
          <hr className={styles.hr} />
          <div className={styles.links}>
            <span> Binance© 2023</span>
            <Link href={"#"}>Cookie Preferences</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}