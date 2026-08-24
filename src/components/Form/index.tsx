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

  return (
    <form onSubmit={e => handleCreateNewTask(e)} className="form" action="">
      <Input
        type="text"
        id="taskName"
        placeholder="nome da tarefa"
        ref={taskNameInput}
      />
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
