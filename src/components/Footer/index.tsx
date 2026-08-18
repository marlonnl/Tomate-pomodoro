import styles from './styles.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#">? o método pomodoro</a>
      <a href="#">Tomate app &copy; {new Date().getFullYear()}</a>
    </footer>
  )
}
