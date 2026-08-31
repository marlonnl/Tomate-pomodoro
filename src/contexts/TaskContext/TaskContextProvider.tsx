import { useEffect, useReducer, useRef } from 'react'

import { TaskContext } from './TaskContext'
import { taskReducer } from './taskReducer'
import { initialTaskState } from './initialTaskState'
import { TimerWorkerManager } from '../../workers/TimerWorkerManager'
import { TaskActionTypes } from './taskActions'
import { loadBeep } from '../../utils/loadBeep'
import type { TaskStateModel } from '../../models/TaskStateModel'

type TaskContextProviderProps = {
  children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    const storageState = localStorage.getItem('state')
    if (!storageState) return initialTaskState
    const parsedStorageState = JSON.parse(storageState) as TaskStateModel
    return {
      ...parsedStorageState,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsReamining: '00:00',
    }
  })
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null)

  const worker = TimerWorkerManager.getInstance()

  useEffect(() => {
    worker.onmessage(event => {
      const countdownSeconds = event.data

      if (countdownSeconds <= 0) {
        if (playBeepRef.current) {
          playBeepRef.current()
          playBeepRef.current = null
        }
        dispatch({ type: TaskActionTypes.COMPLETE_TASK })
        worker.terminate()
      } else {
        dispatch({
          type: TaskActionTypes.COUNTDOWN,
          payload: { secondsRemaining: countdownSeconds },
        })
      }
    })
  })

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))

    if (!state.activeTask) {
      worker.terminate()
    } else {
      if (state.secondsRemaining <= 1) {
        document.title = 'Tomate Pomodoro'
      } else {
        document.title = `${state.formattedSecondsReamining} - Tomate pomodoro`
      }
    }

    worker.postMessage(state)
  }, [state, worker])

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep()
    } else {
      playBeepRef.current = null
    }
  }, [state.activeTask])

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}
