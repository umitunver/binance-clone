import styles from './index.module.scss'

interface Props {
  children: React.ReactNode;
}

export default function Container(props: Props) {
  return <div className={styles.container}>{props.children}</div>;
}
