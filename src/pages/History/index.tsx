import { TrashIcon } from 'lucide-react'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { MainTemplate } from '../../templates/MainTemplate'

import styles from './styles.module.css'

export function History() {
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
              {Array.from({ length: 20 }).map((_, index) => {
                return (
                  <tr key={index}>
                    <td>Estudar</td>
                    <td>25 min</td>
                    <td>31/08/2026 18:47</td>
                    <td>Completa</td>
                    <td>Foco</td>
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
