import { RouterLink } from '../RouterLink'

import styles from './styles.module.css'

export function Logo() {
  return (
    <header>
      <div className={styles.logoHeader}>
        <RouterLink href="/">
          {/* <CookingPotIcon size={'3.8rem'} /> */}
          <h1 title="Tomate">🍅</h1>
        </RouterLink>
        <p>a pomodoro app</p>
      </div>
    </header>
  )
}
