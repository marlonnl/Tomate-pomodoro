import {
  HomeIcon,
  MoonIcon,
  Settings2Icon,
  SunMediumIcon,
  TimerResetIcon,
} from 'lucide-react'

import styles from './styles.module.css'

export function Menu() {
  return (
    <nav className={styles.navButtons}>
      <a href="#">
        <HomeIcon />
      </a>
      <a href="#">
        <TimerResetIcon />
      </a>
      <a href="#">
        <Settings2Icon />
      </a>
      <a href="#">
        <SunMediumIcon />
      </a>
      <a href="#">
        <MoonIcon />
      </a>
    </nav>
  )
}
