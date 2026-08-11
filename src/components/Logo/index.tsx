import { CookingPotIcon } from 'lucide-react'

import styles from './styles.module.css'

export function Logo() {
  return (
    <header className={styles['logo-header']}>
      <CookingPotIcon size={'3.8rem'} />
      <h1>Tomate</h1>
    </header>
  )
}
