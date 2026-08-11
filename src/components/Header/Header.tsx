import styles from './Header.module.css'

type HeadProps = {
  children: React.ReactNode // components
}

export function Header({ children }: HeadProps) {
  return <h1 className={styles.heading}>{children}</h1>
}
