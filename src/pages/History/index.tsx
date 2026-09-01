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

export function History() {
  const { state } = useTaskContext()

  return (
    <MainTemplate>
      <Container>
        <Header>
          <span>History</span>
          <span className={styles.squareButton}>
            <Button
              color="stop"
              aria-label="Apagar histórico"
              title="Apagar histórico"
            >
              <TrashIcon />
            </Button>
          </span>
        </Header>
      </Container>
      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>

            <tbody>
              {state.tasks.map(task => {
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
      </Container>
    </MainTemplate>
  )
}
