import styles from "./Sidebar.module.css"
import Logo from "./Logo"
import AppNav from "./AppNav"
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <Logo/>
        <AppNav/>
        <AppNav/>
        <p>
            lists of cities
        </p>
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
            </p>
        </footer>
    </div>
  )
}
