import Link from 'next/link';
import styles from './index.module.scss'
import Icon from '@/components/icons'

type ButtonProps = {
  title: string;
  variant: 'primary' | 'secondary',
  icon?: string,
  iconColor?: string,
  iconWidth?: number,
  iconHeight?: number,
  mt?: number,
  mb?: number,
  fullWidth?: boolean;
}
export default function Button({ ...props }: ButtonProps) {
  return (
    <Link href={"#"} className={`${styles.button} ${props?.variant}`} style={{ marginTop: props?.mt || 0, marginBottom: props?.mb || 0, width: props?.fullWidth ? '100%' : 'fit-content' }}>
      {props?.icon && <Icon icon={props?.icon} width={props?.iconWidth} height={props?.iconHeight} fill={props?.iconColor} />}
      {props?.title}
    </Link>
  )
}