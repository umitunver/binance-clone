interface IconProps {
  width?: number,
  height?: number;
  fill?: string
}

const GiftIcon = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 20} height={props.height || 20} viewBox="0 0 24 24" fill="none" className="css-171c046">
      <path d="M13.5 6.379V3h-3v3.379l-2.94-2.94-2.12 2.122L7.878 8H4v3h6.75V8h2.5v3H20V8h-3.879l2.44-2.44-2.122-2.12L13.5 6.378zM4 13.5V20h6.75v-6.5H4zM13.25 20H20v-6.5h-6.75V20z"
        fill={props?.fill || "currentColor"}>
      </path>
    </svg>
  )
}

const ChevronRightIcon = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24" fill="none" className="icon-dir css-1j6o9r1"><path fillRule="evenodd" clipRule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill={props.fill || "currentColor"}></path></svg>
  )
}

const UserIcon = (props: IconProps) => {
  return (
    <svg width={props.width || 17} height={props.height || 16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5 4C12.5 6.20914 10.7091 8 8.5 8C6.29086 8 4.5 6.20914 4.5 4C4.5 1.79086 6.29086 0 8.5 0C10.7091 0 12.5 1.79086 12.5 4ZM4.5 10C2.29086 10 0.5 11.7909 0.5 14V16H16.5V14C16.5 11.7909 14.7091 10 12.5 10H4.5Z" fill={props.fill || "#181A20"} />
    </svg>
  )
}

const GoogleIcon = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /><path d="M1 1h22v22H1z" fill="none" /></svg>
  )
}

const AppleIcon = (props: IconProps) => {
  return (

    <svg width={props.width || 15} height={props.height || 16} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.0152 12.4689C13.771 13.0279 13.482 13.5424 13.1471 14.0155C12.6906 14.6604 12.3169 15.1068 12.0289 15.3547C11.5824 15.7616 11.104 15.97 10.5917 15.9818C10.224 15.9818 9.78048 15.8781 9.26423 15.6678C8.74628 15.4584 8.27029 15.3547 7.83506 15.3547C7.37861 15.3547 6.88906 15.4584 6.36543 15.6678C5.84101 15.8781 5.41854 15.9878 5.09553 15.9986C4.60429 16.0194 4.11465 15.8051 3.6259 15.3547C3.31395 15.0851 2.92377 14.6229 2.45636 13.9681C1.95485 13.2688 1.54255 12.458 1.21954 11.5336C0.873609 10.5351 0.700195 9.5682 0.700195 8.63213C0.700195 7.55987 0.934005 6.63506 1.40232 5.86007C1.77038 5.23757 2.26002 4.74652 2.87285 4.38604C3.48567 4.02556 4.14783 3.84186 4.86092 3.83011C5.2511 3.83011 5.76277 3.94971 6.39862 4.18476C7.03268 4.42061 7.4398 4.54021 7.6183 4.54021C7.75175 4.54021 8.20401 4.40036 8.97072 4.12156C9.69577 3.863 10.3077 3.75594 10.809 3.79811C12.1674 3.90675 13.188 4.4374 13.8667 5.39342C12.6518 6.12288 12.0508 7.14457 12.0628 8.45525C12.0737 9.47616 12.4475 10.3257 13.182 11.0003C13.5149 11.3133 13.8866 11.5553 14.3002 11.7272C14.2105 11.9849 14.1158 12.2318 14.0152 12.4689ZM10.8997 0.320091C10.8997 1.12027 10.6047 1.8674 10.0167 2.55894C9.30708 3.38104 8.44879 3.85608 7.51804 3.78112C7.50618 3.68512 7.4993 3.58409 7.4993 3.47792C7.4993 2.70975 7.83676 1.88765 8.43603 1.21547C8.73522 0.875136 9.11573 0.592152 9.57717 0.36641C10.0376 0.144037 10.4731 0.0210593 10.8828 0C10.8947 0.106972 10.8997 0.213951 10.8997 0.320081V0.320091Z" fill="#1E2329" />
    </svg>

  )
}

export { GiftIcon, ChevronRightIcon, UserIcon, GoogleIcon, AppleIcon }