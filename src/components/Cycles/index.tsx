import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { cycleDescription } from '../../utils/cycleDescription'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import { CycleStatus } from '../CycleStatus'

import styles from './styles.module.css'

export function Cycles() {
  const { state } = useTaskContext()

  // const cycleDescription = {
  //   work: 'foco',
  //   shortBreak: 'descanso curto',
  //   longBreak: 'descanso longo',
  // }

  const cycles = Array.from({ length: state.currentCycle })

  return (
    <div className={styles.wrapper}>
      <div className={styles.cycleDots}>
        {cycles.map((_, index) => {
          const nextCycle = getNextCycle(index)
          const nextCycleType = getNextCycleType(nextCycle)

          return (
            <span
              key={`${nextCycle}_${nextCycleType}`}
              aria-label={`Indicador de ciclo: ${cycleDescription[nextCycleType]}`}
              title={`Indicador de ciclo: ${cycleDescription[nextCycleType]}`}
              className={styles.cycleDot}
              data-status={nextCycleType}
            ></span>
          )
        })}
      </div>
      <div>
        <CycleStatus />
      </div>
    </div>
  )
}
