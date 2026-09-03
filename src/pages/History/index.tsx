import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'

import { TrashIcon } from 'lucide-react'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { MainTemplate } from '../../templates/MainTemplate'

import styles from './styles.module.css'
import { formatDate } from '../../utils/formatDate'
import { getTaskStatus } from '../../utils/getTaskStatus'
import { cycleDescription } from '../../utils/cycleDescription'
import { sortTasks } from '../../utils/sortTasks'
import type { SortTasksOptions } from '../../utils/sortTasks'
import { useEffect, useMemo, useState } from 'react'
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions'
import { toastifyWrapper } from '../../adapters/toastifyWrapper'
import { APPNAME } from '../../utils/appName'

export function History() {
  const { state, dispatch } = useTaskContext()

  const hasTasks = state.tasks.length > 0
  const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: 'startDate',
        direction: 'desc',
      }
    },
  )

  useEffect(() => {
    document.title = `Histórico - ${APPNAME}`

    return () => {
      toastifyWrapper.dismiss()
    }
  }, [])

  const sortedTasks = useMemo(
    () =>
      sortTasks({
        tasks: state.tasks,
        field: sortTasksOptions.field,
        direction: sortTasksOptions.direction,
      }),
    [state.tasks, sortTasksOptions.field, sortTasksOptions.direction],
  )

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc'

    setSortTasksOptions({
      tasks: sortTasks({
        tasks: sortTasksOptions.tasks,
        direction: newDirection,
        field,
      }),
      direction: newDirection,
      field,
    })
  }

  function handleClearHistory() {
    toastifyWrapper.dismiss()
    toastifyWrapper.confirm(
      'Term certeza que deseja apagar o seu histórico de tarefas?',
      confirmation => {
        if (!confirmation) return
        dispatch({ type: TaskActionTypes.RESET_STATE })
      },
    )
  }

  return (
    <MainTemplate>
      <Container>
        <Header>
          <span>History</span>
          {hasTasks && (
            <span className={styles.squareButton}>
              <Button
                color="stop"
                aria-label="Apagar histórico"
                title="Apagar histórico"
                onClick={handleClearHistory}
              >
                <TrashIcon />
              </Button>
            </span>
          )}
        </Header>
      </Container>
      <Container>
        {hasTasks && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th
                    onClick={() => handleSortTasks({ field: 'name' })}
                    className={styles.thSort}
                  >
                    Tarefa ↕
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: 'duration' })}
                    className={styles.thSort}
                  >
                    Duração ↕
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: 'startDate' })}
                    className={styles.thSort}
                  >
                    Data ↕
                  </th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {sortedTasks.map(task => {
                  // {sortTasksOptions.tasks.map(task => {
                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration} min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{cycleDescription[task.type]}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
        {!hasTasks && (
          <p style={{ textAlign: 'center' }}>
            Ainda não há tarefas registradas.
          </p>
        )}
      </Container>
    </MainTemplate>
  )
}
