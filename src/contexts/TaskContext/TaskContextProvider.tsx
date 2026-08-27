import { useEffect, useReducer } from 'react'

import { TaskContext } from './TaskContext'
import { taskReducer } from './taskReducer'
import { initialTaskState } from './initialTaskState'
import { TimerWorkerManager } from '../../workers/TimerWorkerManager'

type TaskContextProviderProps = {
  children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState)

  const worker = TimerWorkerManager.getInstance()
  worker.onmessage(event => {
    const countdownSeconds = event.data
    console.log(countdownSeconds)

    if (countdownSeconds <= 0) {
      console.log('WORKER completado')
      worker.terminate()
    }
  })

  useEffect(() => {
    if (!state.activeTask) {
      console.log('Sem activeTask, worker terminado.')
      worker.terminate()
    }

    worker.postMessage(state)
  }, [state, worker])

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}
