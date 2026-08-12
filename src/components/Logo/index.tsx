import { CookingPotIcon } from 'lucide-react'

import styles from './styles.module.css'

export function Logo() {
  return (
    <header>
      <div className={styles.logoHeader}>
        <a href="#">
          {/* <CookingPotIcon size={'3.8rem'} /> */}
          <h1 title="Tomate">🍅</h1>
        </a>
        <p>a pomodoro app</p>
      </div>
    </header>
  )
}
