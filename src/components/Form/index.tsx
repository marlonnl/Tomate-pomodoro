import { Play, TimerOff } from 'lucide-react'
import { Button } from '../Button'
import { Input } from '../Input'

import styles from './styles.module.css'

export function Form() {
  return (
    <form className="form" action="">
      <Input type="text" id="timerName" placeholder="nome da tarefa" />
      <div className={styles.buttonControls}>
        <Button>
          <Play />
        </Button>
        <Button>
          <TimerOff />
          {/* <Pause /> */}
        </Button>
      </div>
    </form>
  )
}
