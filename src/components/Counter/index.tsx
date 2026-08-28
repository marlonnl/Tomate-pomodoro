import { useEffect } from 'react'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { cycleDescription } from '../../utils/cycleDescription'
import { getNextCycleType } from '../../utils/getNextCycleType'
import { Form } from '../Form'

import styles from './styles.module.css'
import { getRelativeSeconds } from '../../utils/relativeTime'

export function Counter() {
  const { state } = useTaskContext()

  const totalSeconds = state.activeTask?.duration * 60
  const relativeSeconds =
    100 - getRelativeSeconds(state.secondsRemaining, totalSeconds)

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.progressRing}
        style={
          {
            '--progress': `${relativeSeconds}`,
          } as React.CSSProperties
        }
      >
        <div className={styles.progressRingInner}>
          <div className={styles.timerDisplay}>
            <span className={styles.timer}>
              {state.formattedSecondsReamining}
            </span>
            <span className={styles.name}>
              {state.currentCycle > 0
                ? cycleDescription[getNextCycleType(state.currentCycle)]
                : '---'}
            </span>
          </div>
          <div className={styles.hoverControls}>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}
