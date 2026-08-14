import styles from './styles.module.css'

type InputProps = {
  id: string
  placeholder?: string
  children?: React.ReactNode
} & React.ComponentProps<'input'>

export function Input({
  type,
  id,
  placeholder,
  children,
  ...rest
}: InputProps) {
  return (
    <>
      {children && <label htmlFor={id}>{children}</label>}
      <input
        className={styles.input}
        id={id}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </>
  )
}
