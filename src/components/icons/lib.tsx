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
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" className="css-knosvp"><path fillRule="evenodd" clipRule="evenodd" d="M15.894 2c.14 1.212-.365 2.405-1.104 3.283-.77.864-2.004 1.524-3.204 1.439-.157-1.165.451-2.405 1.132-3.161.77-.86 2.107-1.517 3.176-1.561zm3.839 6.509c-.142.08-2.354 1.34-2.33 3.902.028 3.102 2.857 4.127 2.89 4.138-.016.072-.443 1.48-1.502 2.908-.886 1.258-1.815 2.488-3.288 2.51-.7.016-1.174-.176-1.667-.375-.514-.208-1.05-.425-1.889-.425-.888 0-1.448.224-1.988.44-.467.186-.918.367-1.555.392-1.403.05-2.476-1.343-3.394-2.59-1.833-2.544-3.261-7.173-1.347-10.322.928-1.545 2.62-2.54 4.428-2.566.796-.016 1.56.276 2.23.531.512.196.969.37 1.343.37.329 0 .773-.167 1.291-.362.816-.308 1.813-.684 2.83-.583.695.02 2.675.26 3.951 2.03l-.003.002z" fill="currentColor"></path></svg>

  )
}

const TriangleIcon = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="css-dg7fvt"><path d="M12.24 8L8 12.24l4.24 4.24 4.24-4.24L12.24 8zm-1.41 4.24l1.41-1.41 1.41 1.41-1.41 1.41-1.41-1.41z" fill="currentColor"></path></svg>
  )
}

const BinanceQr = (props: IconProps) => {
  return (
    <svg shapeRendering="crispEdges" height="86" width="86" viewBox="0 0 37 37"><path fill="#FFFFFF" d="M0,0 h37v37H0z"></path><path fill="#000000" d="M0 0h7v1H0zM8 0h1v1H8zM12 0h1v1H12zM17 0h1v1H17zM19 0h5v1H19zM25 0h1v1H25zM30,0 h7v1H30zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM11 1h1v1H11zM15 1h2v1H15zM18 1h2v1H18zM22 1h5v1H22zM28 1h1v1H28zM30 1h1v1H30zM36,1 h1v1H36zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h2v1H8zM12 2h2v1H12zM16 2h1v1H16zM19 2h1v1H19zM21 2h1v1H21zM23 2h1v1H23zM25 2h2v1H25zM30 2h1v1H30zM32 2h3v1H32zM36,2 h1v1H36zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM9 3h2v1H9zM12 3h1v1H12zM14 3h2v1H14zM17 3h1v1H17zM20 3h2v1H20zM23 3h3v1H23zM27 3h2v1H27zM30 3h1v1H30zM32 3h3v1H32zM36,3 h1v1H36zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h1v1H8zM11 4h1v1H11zM13 4h1v1H13zM18 4h2v1H18zM21 4h1v1H21zM26 4h1v1H26zM28 4h1v1H28zM30 4h1v1H30zM32 4h3v1H32zM36,4 h1v1H36zM0 5h1v1H0zM6 5h1v1H6zM9 5h1v1H9zM13 5h2v1H13zM16 5h1v1H16zM20 5h1v1H20zM22 5h2v1H22zM25 5h2v1H25zM28 5h1v1H28zM30 5h1v1H30zM36,5 h1v1H36zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 6h1v1H26zM28 6h1v1H28zM30,6 h7v1H30zM9 7h1v1H9zM11 7h1v1H11zM13 7h2v1H13zM16 7h3v1H16zM22 7h2v1H22zM25 7h1v1H25zM27 7h2v1H27zM0 8h1v1H0zM3 8h8v1H3zM13 8h3v1H13zM21 8h4v1H21zM26 8h1v1H26zM28 8h2v1H28zM32 8h1v1H32zM34,8 h3v1H34zM0 9h1v1H0zM2 9h2v1H2zM5 9h1v1H5zM10 9h1v1H10zM12 9h2v1H12zM16 9h1v1H16zM18 9h1v1H18zM21 9h1v1H21zM24 9h4v1H24zM29 9h1v1H29zM31 9h2v1H31zM34 9h2v1H34zM0 10h1v1H0zM2 10h1v1H2zM6 10h1v1H6zM8 10h1v1H8zM10 10h2v1H10zM15 10h3v1H15zM19 10h2v1H19zM22 10h2v1H22zM25 10h1v1H25zM27 10h1v1H27zM30 10h3v1H30zM34 10h1v1H34zM36,10 h1v1H36zM2 11h1v1H2zM5 11h1v1H5zM7 11h2v1H7zM10 11h1v1H10zM12 11h1v1H12zM16 11h5v1H16zM22 11h3v1H22zM31 11h1v1H31zM33,11 h4v1H33zM0 12h1v1H0zM2 12h1v1H2zM6 12h1v1H6zM10 12h2v1H10zM14 12h3v1H14zM18 12h1v1H18zM20 12h1v1H20zM22 12h3v1H22zM27 12h2v1H27zM30 12h1v1H30zM33 12h1v1H33zM36,12 h1v1H36zM2 13h1v1H2zM7 13h1v1H7zM9 13h2v1H9zM13 13h1v1H13zM15 13h2v1H15zM21 13h1v1H21zM23 13h2v1H23zM26 13h4v1H26zM32 13h2v1H32zM0 14h1v1H0zM2 14h1v1H2zM4 14h3v1H4zM8 14h6v1H8zM15 14h1v1H15zM18 14h2v1H18zM26 14h2v1H26zM30 14h1v1H30zM32,14 h5v1H32zM3 15h1v1H3zM5 15h1v1H5zM7 15h2v1H7zM13 15h1v1H13zM15 15h2v1H15zM21 15h2v1H21zM26 15h1v1H26zM28 15h1v1H28zM30 15h2v1H30zM33 15h2v1H33zM2 16h1v1H2zM6 16h2v1H6zM11 16h1v1H11zM15 16h1v1H15zM17 16h3v1H17zM21 16h2v1H21zM24 16h2v1H24zM30 16h1v1H30zM34,16 h3v1H34zM0 17h1v1H0zM2 17h1v1H2zM4 17h2v1H4zM7 17h1v1H7zM9 17h1v1H9zM14 17h1v1H14zM21 17h2v1H21zM27 17h1v1H27zM29 17h1v1H29zM31 17h1v1H31zM33 17h2v1H33zM3 18h1v1H3zM5 18h3v1H5zM10 18h1v1H10zM12 18h2v1H12zM16 18h1v1H16zM19 18h1v1H19zM23 18h1v1H23zM26 18h2v1H26zM30 18h1v1H30zM32 18h1v1H32zM34 18h1v1H34zM36,18 h1v1H36zM0 19h2v1H0zM5 19h1v1H5zM8 19h1v1H8zM11 19h2v1H11zM15 19h2v1H15zM19 19h2v1H19zM22 19h2v1H22zM25 19h1v1H25zM27 19h3v1H27zM36,19 h1v1H36zM4 20h1v1H4zM6 20h2v1H6zM9 20h2v1H9zM14 20h1v1H14zM17 20h1v1H17zM19 20h1v1H19zM23 20h2v1H23zM26 20h1v1H26zM28 20h5v1H28zM0 21h3v1H0zM5 21h1v1H5zM7 21h2v1H7zM12 21h4v1H12zM17 21h1v1H17zM19 21h1v1H19zM22 21h2v1H22zM25 21h3v1H25zM29 21h1v1H29zM32 21h1v1H32zM34 21h2v1H34zM0 22h2v1H0zM6 22h1v1H6zM9 22h4v1H9zM15 22h2v1H15zM20 22h2v1H20zM23 22h1v1H23zM27 22h1v1H27zM29 22h3v1H29zM33 22h1v1H33zM36,22 h1v1H36zM0 23h4v1H0zM7 23h1v1H7zM9 23h2v1H9zM12 23h1v1H12zM15 23h1v1H15zM18 23h3v1H18zM27 23h2v1H27zM30 23h5v1H30zM36,23 h1v1H36zM2 24h2v1H2zM6 24h1v1H6zM8 24h1v1H8zM11 24h2v1H11zM17 24h1v1H17zM20 24h3v1H20zM27 24h1v1H27zM30 24h2v1H30zM36,24 h1v1H36zM0 25h3v1H0zM4 25h1v1H4zM9 25h1v1H9zM11 25h1v1H11zM13 25h1v1H13zM18 25h2v1H18zM22 25h1v1H22zM25 25h2v1H25zM28 25h1v1H28zM32 25h3v1H32zM0 26h5v1H0zM6 26h1v1H6zM8 26h2v1H8zM12 26h1v1H12zM15 26h1v1H15zM21 26h1v1H21zM24 26h4v1H24zM29 26h2v1H29zM32 26h1v1H32zM34,26 h3v1H34zM0 27h1v1H0zM4 27h1v1H4zM7 27h1v1H7zM12 27h1v1H12zM16 27h1v1H16zM19 27h1v1H19zM22 27h1v1H22zM29 27h1v1H29zM31 27h1v1H31zM33 27h2v1H33zM0 28h1v1H0zM2 28h2v1H2zM6 28h2v1H6zM9 28h2v1H9zM13 28h4v1H13zM19 28h2v1H19zM22,28 h15v1H22zM8 29h3v1H8zM17 29h1v1H17zM19 29h4v1H19zM25 29h1v1H25zM28 29h1v1H28zM32 29h1v1H32zM34 29h1v1H34zM0 30h7v1H0zM8 30h6v1H8zM15 30h1v1H15zM17 30h3v1H17zM23 30h1v1H23zM28 30h1v1H28zM30 30h1v1H30zM32 30h1v1H32zM36,30 h1v1H36zM0 31h1v1H0zM6 31h1v1H6zM8 31h7v1H8zM16 31h1v1H16zM21 31h1v1H21zM23 31h3v1H23zM27 31h2v1H27zM32 31h1v1H32zM35 31h1v1H35zM0 32h1v1H0zM2 32h3v1H2zM6 32h1v1H6zM8 32h3v1H8zM13 32h2v1H13zM16 32h1v1H16zM18 32h4v1H18zM24 32h1v1H24zM26 32h7v1H26zM35 32h1v1H35zM0 33h1v1H0zM2 33h3v1H2zM6 33h1v1H6zM8 33h1v1H8zM11 33h2v1H11zM20 33h4v1H20zM25 33h2v1H25zM30 33h1v1H30zM36,33 h1v1H36zM0 34h1v1H0zM2 34h3v1H2zM6 34h1v1H6zM9 34h1v1H9zM11 34h1v1H11zM17 34h1v1H17zM22 34h2v1H22zM25 34h1v1H25zM28 34h2v1H28zM32 34h2v1H32zM36,34 h1v1H36zM0 35h1v1H0zM6 35h1v1H6zM9 35h1v1H9zM12 35h2v1H12zM15 35h1v1H15zM17 35h2v1H17zM23 35h2v1H23zM30 35h1v1H30zM32,35 h5v1H32zM0 36h7v1H0zM8 36h2v1H8zM14 36h1v1H14zM16 36h1v1H16zM19 36h1v1H19zM23 36h2v1H23zM28 36h1v1H28zM31 36h1v1H31zM33 36h1v1H33zM36,36 h1v1H36z"></path></svg>
  )
}

const AndroidApk = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={30} viewBox="0 0 24 24" fill="none" className="css-knosvp"><path d="M17.543 14.1a1 1 0 01-.997-.997 1 1 0 01.997-.997 1 1 0 01.997.997 1 1 0 01-.997.997zm-11.05 0a1 1 0 01-.996-.997 1 1 0 01.997-.997 1 1 0 01.997.997.993.993 0 01-.997.997zM17.9 8.082l1.994-3.458a.409.409 0 00-.155-.567.409.409 0 00-.567.156l-2.022 3.503a12.354 12.354 0 00-5.14-1.098c-1.857 0-3.594.394-5.14 1.098L4.848 4.213a.419.419 0 00-.568-.156.419.419 0 00-.155.567l1.994 3.458C2.689 9.948.348 13.423 0 17.52h24c-.32-4.107-2.67-7.583-6.1-9.44z" fill="currentColor"></path></svg>
  )
}

const GooglePlay = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" className="css-knosvp"><path fillRule="evenodd" clipRule="evenodd" d="M3.196 20.822l8.743-8.727-8.743-8.743c-.215.347-.364.91-.364 1.722V19.1c0 .811.149 1.374.364 1.722zM15.63 15.787l-2.864-2.88-8.51 8.527h.083c.728 0 1.357-.265 2.367-.811l8.925-4.836zM16.704 8.965l-3.113 3.13 3.113 3.113 1.888-1.027c.695-.38 1.755-1.076 1.755-2.086 0-1.027-1.06-1.723-1.755-2.104l-1.888-1.026zM4.256 2.738l8.51 8.528 2.865-2.88L6.706 3.55c-1.01-.547-1.639-.812-2.367-.812h-.083z" fill="currentColor"></path></svg>
  )
}

const MacOs = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24" fill="none" className="css-knosvp"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.57 16.156h-.617l-3.945-5.718h-.04l-3.945 5.718h-.609l4.258-6.14L7.39 5.844h.617l3.96 5.742h.04l3.969-5.742h.609l-4.29 6.172 4.274 6.14z" fill="currentColor"></path></svg>
  )
}

const Windows = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" className="css-knosvp"><path d="M0 3.75v7.5h10.5V2.437L0 3.75zM12 2.25v9h12V.75l-12 1.5zM12 12.75v9l12 1.5v-10.5H12zM0 12.75v7.5l10.5 1.313V12.75H0z" fill="currentColor"></path></svg>
  )
}

const Linux = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" className="css-knosvp"><g clipPath="url(#downloadable-linux-s24_svg__clip0)"><path d="M20.581 19.049c-.55-.446-.336-1.431-.907-1.917.553-3.365-.997-6.331-2.845-8.232-1.551-1.595-1.051-3.147-1.051-4.49 0-2.146-.881-4.41-3.55-4.41-2.853 0-3.635 2.38-3.663 3.738-.068 3.262.659 4.11-1.25 6.484-2.246 2.793-2.577 5.579-2.07 7.057a2.924 2.924 0 01-1.155.835c-1.652.72-.441 1.925-.898 2.78a1.57 1.57 0 00-.192.74c0 .75.596 1.399 1.679 1.302 1.461-.13 2.809.905 3.681.905.77 0 1.402-.438 1.696-1.041 1.377-.339 3.077-.296 4.453.059.247.691.917 1.141 1.662 1.141 1.631 0 1.945-1.849 3.816-2.475.674-.225 1.013-.879 1.013-1.488 0-.39-.139-.761-.419-.988zM11.434 8.584c-.319 0-.583-.258-1-.568-.528-.392-1.065-.618-1.059-1.03 0-.283.379-.37.869-.681.526-.333.731-.671 1.249-.671.53 0 .69.268 1.41.579.708.307 1.201.427 1.201.773 0 .355-.741.609-1.158.868-.613.378-.928.73-1.512.73zm1.665-5.215c.882.141.981 1.691.559 2.454l-.355-.145c.184-.543.181-1.437-.435-1.494-.391-.036-.643.48-.697.922a1.686 1.686 0 00-.523-.127c.062-.923.658-1.737 1.451-1.61zM9.696 3.7c.676-.168 1.075.618 1.078 1.435l-.31.19c-.042-.343-.195-.897-.579-.779-.411.128-.344 1.083-.115 1.279l-.306.17c-.42-.707-.419-2.133.232-2.295zM7.581 22.943c-1.963-.893-2.63-.69-3.005-.69-.777 0-1.031-.579-.739-1.127.248-.465.171-.952.11-1.343-.094-.599-.111-.794.478-1.052.815-.346 1.177-.791 1.447-1.124.758-.937 1.523.537 2.15 1.85.407.851 1.208 1.282 1.455 2.225.227.871-.71 1.801-1.896 1.261zm6.987-1.874c-1.384.673-3.147.982-4.466.299-.195-.563-.507-.927-.843-1.293.539-.142.939-.814.46-1.489-.511-.721-1.555-1.224-2.61-2.04-.987-.763-1.299-2.644.045-4.746-.655 1.862-.272 3.578.057 4.069.068-.988.146-2.638 1.496-4.615.681-.998.691-2.316.706-3.14l.62.424c.456.337.838.708 1.386.708.81 0 1.258-.466 1.882-.853.244-.15.613-.302.923-.513.52 2.476 2.674 5.454 2.795 7.15.501-1.032-.142-3.514-.142-3.514.842 1.285.909 2.356.946 3.67.589.241 1.221.869 1.279 1.696l-.245-.028c-.126-.919-2.607-2.269-2.83-.539-1.19.181-.757 2.066-.997 3.288-.11.559-.314 1.001-.462 1.466zm4.846-.041c-.985.38-1.65 1.187-2.107 1.688-.88.966-2.044.503-2.168-.401-.131-.966.36-1.493.572-2.574.193-.987-.023-2.506.431-2.668.295 1.753 2.066 1.016 2.47.538.657 0 .712.222.859.837.092.385.219.709.578 1.09.418.447.29 1.133-.635 1.49zm-8-13.006c-.651 0-1.138-.433-1.534-.769-.203-.171.05-.487.253-.315.387.328.777.675 1.281.675.607 0 1.142-.519 1.867-.805.247-.097.388.285.143.382-.704.277-1.269.832-2.01.832z" fill="currentColor"></path></g><defs><clipPath id="downloadable-linux-s24_svg__clip0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
  )
}

const Api = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24" fill="none" className="css-knosvp"><path d="M12 22c5.522 0 10-4.477 10-10S17.522 2 12 2c-5.186 0-9.45 3.947-9.951 9h4.528c.43-2.77 2.62-5 5.422-5h3.5v2.5H19v2h-3.5v3H19v2h-3.5V18H12c-2.803 0-4.992-2.23-5.422-5H2.049c.502 5.053 4.765 9 9.95 9z" fill="currentColor"></path><path d="M12 8c-1.837 0-3.5 1.69-3.5 4s1.663 4 3.5 4h1.5V8H12z" fill="currentColor"></path></svg>
  )
}

const Globe = (props: IconProps) => {
  return (
    <svg className="bn-svg mr-8" width={props?.height || 24} height={props?.height || 24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15.23 20.403a9.011 9.011 0 005.684-7.153h-3.942c-.147 2.86-.793 5.388-1.741 7.153zm-.757-7.153c-.178 4.102-1.217 7.25-2.473 7.25-1.256 0-2.295-3.148-2.473-7.25h4.946zm0-2.5H9.527C9.705 6.648 10.744 3.5 12 3.5c1.256 0 2.295 3.148 2.473 7.25zm2.499 0h3.942a9.01 9.01 0 00-5.683-7.153c.948 1.765 1.594 4.293 1.741 7.153zm-9.936 0c.147-2.862.793-5.392 1.743-7.156a9.01 9.01 0 00-5.693 7.156h3.95zm0 2.5h-3.95a9.01 9.01 0 005.693 7.157c-.95-1.765-1.596-4.295-1.743-7.157z" fill="currentColor"></path></svg>
  )
}

const Cash = (props: IconProps) => {
  return (
    <svg className="bn-svg mr-8" width={props?.height || 24} height={props?.height || 24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.336 8.577c-.769.15-1.1.558-1.1 1.146 0 .573.331.874 1.1 1.086V8.577zM12.678 15.393c.71-.196 1.041-.663 1.041-1.236 0-.438-.18-.89-1.04-1.147v2.383z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 21a9 9 0 100-18 9 9 0 000 18zm.86-3.948V18.5h-1.72v-1.387c-1.523-.136-2.533-.755-3.287-1.584l1.357-1.237c.573.604 1.282 1.01 2.126 1.131V12.71c-2.262-.468-3.182-1.463-3.182-2.926 0-1.583 1.04-2.64 2.986-2.865V5.5h1.72v1.418c1.206.135 2.096.603 2.76 1.357l-1.373 1.237c-.362-.408-.845-.74-1.569-.905v2.503c2.112.483 3.122 1.342 3.122 2.88 0 1.479-.935 2.73-2.94 3.062z" fill="currentColor"></path></svg>
  )
}

const ArrowRight = (props: IconProps) => {
  return (
    <svg className="bn-svg header-nav-subarrow" width={props?.height || 16} height={props?.height || 16} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z" fill="#FCD535"></path></svg>
  )
}
const Search = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24"><defs><symbol viewBox="0 0 24 24" id="search-f"> <path fillRule="evenodd" clipRule="evenodd" d="M11 6C13.7614 6 16 8.23858 16 11C16 13.7614 13.7614 16 11 16C8.23857 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6ZM11 3C15.4183 3 19 6.58172 19 11C19 12.3907 18.6451 13.6985 18.021 14.8379L21.0915 17.9086L19.5006 19.4995L17.9097 21.0904L14.8396 18.0201C13.6999 18.6448 12.3914 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3Z" fill="#1E2329"></path></symbol></defs><g fill="#1E2329"> <path fillRule="evenodd" clipRule="evenodd" d="M11 6C13.7614 6 16 8.23858 16 11C16 13.7614 13.7614 16 11 16C8.23857 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6ZM11 3C15.4183 3 19 6.58172 19 11C19 12.3907 18.6451 13.6985 18.021 14.8379L21.0915 17.9086L19.5006 19.4995L17.9097 21.0904L14.8396 18.0201C13.6999 18.6448 12.3914 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3Z" fill="currentColor"></path></g></svg>
  )
}

const QrDownload = (props: IconProps) => {
  return (
    <svg className="bn-svg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24"><defs><symbol viewBox="0 0 24 24" id="app-download-f"><path fillRule="evenodd" clipRule="evenodd" d="M7.5 6V9H4.5V3H5H7.5H16H19V6V9H16V6H7.5ZM5 21H4.5V15H7.5V18H16V15H19V18V21H16H7.5H5ZM13.5088 12.0024L16.0176 12.0078L12.0088 16.0166L8 12.0078L10.5088 11.9832V8H13.5088V12.0024Z" fill="#1E2329"></path></symbol></defs><g fill="#1E2329"><path fillRule="evenodd" clipRule="evenodd" d="M7.5 6V9H4.5V3H5H7.5H16H19V6V9H16V6H7.5ZM5 21H4.5V15H7.5V18H16V15H19V18V21H16H7.5H5ZM13.5088 12.0024L16.0176 12.0078L12.0088 16.0166L8 12.0078L10.5088 11.9832V8H13.5088V12.0024Z" fill="currentColor"></path></g></svg>
  )
}

const DarkMode = (props: IconProps) => {
  return (
    <svg className="bn-svg theme-icon hover-color" height={16} width={16} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.968 12.768a7 7 0 01-9.735-9.735 9 9 0 109.735 9.735z" fill="currentColor"></path></svg>
  )
}
const LightMode = (props: IconProps) => {
  return (
    <svg className="bn-svg theme-icon hover-color" height={16} width={16} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M10.5 2h3v3h-3V2zM16 12a4 4 0 11-8 0 4 4 0 018 0zM5.99 3.869L3.867 5.99 5.99 8.112 8.111 5.99 5.989 3.87zM2 13.5v-3h3v3H2zm1.868 4.51l2.121 2.12 2.122-2.12-2.122-2.122-2.121 2.121zM13.5 19v3h-3v-3h3zm4.51-3.112l-2.121 2.122 2.121 2.121 2.121-2.121-2.121-2.122zM19 10.5h3v3h-3v-3zm-3.11-4.51l2.12 2.121 2.122-2.121-2.121-2.121-2.122 2.121z" fill="currentColor"></path></svg>
  )
}
export {
  GiftIcon,
  ChevronRightIcon,
  UserIcon,
  GoogleIcon,
  AppleIcon,
  TriangleIcon,
  BinanceQr,
  AndroidApk,
  GooglePlay,
  MacOs,
  Windows,
  Linux,
  Api,
  Globe,
  Cash,
  ArrowRight,
  Search,
  QrDownload,
  DarkMode,
  LightMode
}