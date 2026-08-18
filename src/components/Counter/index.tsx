import { Play, TimerOff } from 'lucide-react'
import styles from './styles.module.css'
import { Input } from '../Input'
import { Button } from '../Button'

export function Counter() {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.progressRing}
        style={{ '--progress': '15' } as React.CSSProperties}
      >
        <div className={styles.progressRingInner}>
          <div className={styles.timerDisplay}>
            <span className={styles.timer}>21:19</span>
            <span className={styles.name}>FOCO</span>
          </div>
          <div className={styles.hoverControls}>
            <form className="form" action="">
              <Input type="text" id="timerName" placeholder="nome da tarefa" />
            </form>
            <div className={styles.buttonControls}>
              <Button>
                <Play />
              </Button>
              <Button>
                <TimerOff />
                {/* <Pause /> */}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
