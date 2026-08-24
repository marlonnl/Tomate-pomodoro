import { useRef } from 'react'

import { Button } from '../Button'
import { Input } from '../Input'

import { Play, TimerOff } from 'lucide-react'
import styles from './styles.module.css'
import type { TaskModel } from '../../models/TaskModel'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes'

export function Form() {
  const { state, setState } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)

  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  function handleCreateNewTask(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    // if (taskNameInput.current === null) return
    // const taskName = taskNameInput.current.value.trim()
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

    const secondsRemaining = newTask.duration * 60

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsReamining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      }
    })
  }

  function handleInterruptTask() {
    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsReamining: '00:00',
        tasks: prevState.tasks.map(task => {
          if (prevState.activeTask && prevState.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() }
          }
          return task
        }),
      }
    })
  }

  return (
    <form onSubmit={e => handleCreateNewTask(e)} className="form" action="">
      <Input
        type="text"
        id="taskName"
        placeholder="nome da tarefa"
        ref={taskNameInput}
        disabled={!!state.activeTask}
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
