import { RouterLink } from '../RouterLink'
import styles from './styles.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro">Método pomodoro</RouterLink>
      <RouterLink href="/about-project">
        Tomate app &copy; {new Date().getFullYear()}
      </RouterLink>
    </footer>
  )
}
