import { RouterLink } from '../RouterLink'
import styles from './styles.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro">sobre o método pomodoro</RouterLink>
      <RouterLink href="/">
        Tomate app &copy; {new Date().getFullYear()}
      </RouterLink>
    </footer>
  )
}
