import { useEffect, useState } from 'react'
import {
  HomeIcon,
  MoonIcon,
  Settings2Icon,
  SunMediumIcon,
  TimerResetIcon,
} from 'lucide-react'

import styles from './styles.module.css'

type ThemeType = 'dark' | 'light'

export function Menu() {
  const ThemeChange = {
    dark: {
      icon: <SunMediumIcon />,
      name: 'claro',
    },
    light: {
      icon: <MoonIcon />,
      name: 'escuro',
    },
  }

  const [theme, setTheme] = useState<ThemeType>(() => {
    const storedTheme = (localStorage.getItem('theme') as ThemeType) || 'dark'
    return storedTheme
  })

  function handleThemeChange(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    e.preventDefault()

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
      return nextTheme
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme) // guardar o tema no localStorage
  }, [theme])

  return (
    <nav className={styles.navButtons}>
      <a href="#" title="Página inicial" aria-label="Ir para página incial">
        <HomeIcon />
      </a>
      <a href="#" title="Histórico" aria-label="Ver histórico">
        <TimerResetIcon />
      </a>
      <a href="#" title="Configurações" aria-label="Configurar app">
        <Settings2Icon />
      </a>
      <a
        href="#"
        title={`Mudar para tema ${ThemeChange[theme]['name']}`}
        aria-label={`Alterar tema para ${ThemeChange[theme]['name']}`}
        onClick={e => handleThemeChange(e)}
      >
        {ThemeChange[theme]['icon']}
      </a>
    </nav>
  )
}
