import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'

import { Button } from '../Button'

import styles from './styles.module.css'

import type { ToastContentProps } from 'react-toastify'

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>
        <div className={styles.buttonsContainer}>
          <Button
            aria-label="Confirmar e fechar"
            title="Confirmar e fechar"
            onClick={() => closeToast(true)}
          >
            <ThumbsUpIcon />
          </Button>
          <Button
            aria-label="Cancelar e fechar"
            title="Cancelar e fechar"
            onClick={() => closeToast(false)}
            color="stop"
          >
            <ThumbsDownIcon />
          </Button>
        </div>
      </div>
    </>
  )
}
