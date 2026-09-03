import { useRef } from 'react'

import { Button } from '../Button'
import { Input } from '../Input'

import type { TaskModel } from '../../models/TaskModel'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions'

import { Play, TimerOff } from 'lucide-react'
import { toastifyWrapper } from '../../adapters/toastifyWrapper'

import styles from './styles.module.css'

export function Form() {
  const { state, dispatch } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || ''

  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  function handleCreateNewTask(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    toastifyWrapper.dismiss()

    const taskNameInputValue = taskNameInput.current?.value.trim()

    const taskName: string = taskNameInputValue
      ? taskNameInputValue
      : 'Pomodoro task'

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    }

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask })
    toastifyWrapper.success(`Tarefa ${taskName} iniciada!`)
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK })
    toastifyWrapper.dismiss()
    toastifyWrapper.error('Tarefa interrompida.')
  }

  return (
    <form onSubmit={e => handleCreateNewTask(e)} className="form" action="">
      <Input
        type="text"
        id="taskName"
        placeholder="nome da tarefa"
        ref={taskNameInput}
        disabled={!!state.activeTask}
        defaultValue={lastTaskName}
      />
      <div className={styles.buttonControls}>
        {!state.activeTask ? (
          <Button
            type="submit"
            key="submitButton"
            aria-label="Iniciar nova tarefa"
            title="Iniciar nova tarefa"
          >
            <Play />
          </Button>
        ) : (
          <Button
            type="button"
            key="interruptButton"
            aria-label="Interromper tarefa atual"
            title="Interromper tarefa atual"
            color="stop"
            onClick={handleInterruptTask}
          >
            <TimerOff />
            {/* <Pause /> */}
          </Button>
        )}
      </div>
    </form>
  )
}
