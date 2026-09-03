import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'

export function CycleStatus() {
  const { state } = useTaskContext()

  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  // status
  const statusActive = {
    work: <span>Foque por {state.config.work}min</span>,
    shortBreak: <span>Descanse por {state.config.shortBreak}min</span>,
    longBreak: <span>Descanso longo</span>,
  }
  const statusInactive = {
    work: <span>Próximo ciclo é de {state.config.work}min</span>,
    shortBreak: <span>Próximo descanso é de {state.config.shortBreak}min</span>,
    longBreak: <span>Próximo descanso será longo</span>,
  }

  return (
    <div style={{ fontSize: '1.4rem' }}>
      {!!state.activeTask && statusActive[state.activeTask.type]}
      {!state.activeTask && statusInactive[nextCycleType]}
    </div>
  )
}
