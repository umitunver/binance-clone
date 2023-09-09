import styles from './index.module.scss'
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

interface Props {
  children: React.ReactNode;
}

export default function AppLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main role="main" className={styles.app_main}>
        {children}
      </main>
      <Footer />
    </>
  )
}
