import { useRef } from 'react'

import { Button } from '../Button'
import { Input } from '../Input'

import { Play, TimerOff } from 'lucide-react'
import styles from './styles.module.css'
import type { TaskModel } from '../../models/TaskModel'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle'

export function Form() {
  const { state, setState } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)

  const nexCycle = getNextCycle(state.currentCycle)

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
      duration: 1,
      type: 'work',
    }

    const secondsRemaining = newTask.duration * 60

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nexCycle,
        secondsRemaining,
        formattedSecondsReamining: '00:00',
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
