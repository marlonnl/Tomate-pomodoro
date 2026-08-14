import { Play, TimerOff } from 'lucide-react'
import styles from './styles.module.css'
import { Input } from '../Input'

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
              <a href="#">
                <Play />
              </a>
              <a href="#">
                <TimerOff />
                {/* <Pause /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
