import styles from './index.module.scss'

type PopupProps = {
  visible?: Boolean,
  data?: any
}
export default function SelectionPopup(props: PopupProps) {

  return (
    <div className={styles.contain} style={{ visibility: props?.visible ? 'visible' : 'hidden' }}>
      <input className={styles.input} placeholder='Search' />
      <ul>
        {
          props?.data.map((item: any, index: any) => (
            <li key={index}>{item?.title}</li>
          ))
        }
      </ul>
    </div>
  )
}