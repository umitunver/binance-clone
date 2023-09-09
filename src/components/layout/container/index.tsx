import styles from './index.module.scss'

interface Props {
  children: React.ReactNode;
  mt?: number
}

export default function Container(props: Props) {
  return <div className={styles.container} style={{ marginTop: props?.mt || 0 }}>{props.children}</div>;
}
