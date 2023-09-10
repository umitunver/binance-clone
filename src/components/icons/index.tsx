import React from "react";

// icon library
import * as Icons from "./lib";

interface Match {
  [key: string]: JSX.Element;
}

type IconType = keyof Match;

interface Props {
  icon: IconType | any;
  width?: number;
  height?: number;
  fill?: string;
}
const Icon = React.memo(({ icon, ...props }: Props) => {
  const match: Match = {
    gift: <Icons.GiftIcon {...props} />,
    chevronRight: <Icons.ChevronRightIcon {...props} />,
    user: <Icons.UserIcon {...props} />,
    google: <Icons.GoogleIcon {...props} />,
    apple: <Icons.AppleIcon {...props} />,
    triangleIcon: <Icons.TriangleIcon {...props} />,
    BinanceQr: <Icons.BinanceQr {...props} />,
    AndroidApk: <Icons.AndroidApk {...props} />,
    GooglePlay: <Icons.GooglePlay {...props} />,
    MacOs: <Icons.MacOs {...props} />,
    Windows: <Icons.Windows {...props} />,
    Linux: <Icons.Linux {...props} />,
    Api: <Icons.Api {...props} />,
    globe: <Icons.Globe {...props} />,
    cash: <Icons.Cash {...props} />,
    arrowRight: <Icons.ArrowRight {...props} />,
    search: <Icons.Search {...props} />,
    qrDownload: <Icons.QrDownload {...props} />,
    darkMode: <Icons.DarkMode {...props} />,
    lightMode: <Icons.LightMode {...props} />
  }
  if (!match[icon]) return null;
  return <span className="icon">{match[icon]}</span>;
})

Icon.displayName = 'Icon';
export default Icon