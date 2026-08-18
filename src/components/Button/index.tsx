import styles from './styles.module.css'

type ButtonProps = {
  color?: 'default' | 'stop'
  children: React.ReactNode
} & React.ComponentProps<'button'>

export function Button({ children, color = 'default', ...rest }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[color]}`} {...rest}>
      {children}
    </button>
  )
}
