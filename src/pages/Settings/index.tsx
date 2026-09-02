import { useEffect, useRef } from 'react'

import { SaveIcon } from 'lucide-react'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { MainTemplate } from '../../templates/MainTemplate'

import styles from './styles.module.css'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { toastifyWrapper } from '../../adapters/toastifyWrapper'
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions'
import { APPNAME } from '../../utils/appName'

export function Settings() {
  const { state, dispatch } = useTaskContext()

  useEffect(() => {
    document.title = `Configurações - ${APPNAME}`
  }, [])

  const workTimeInput = useRef<HTMLInputElement>(null)
  const shortBreakTimeInput = useRef<HTMLInputElement>(null)
  const longBreakTimeInput = useRef<HTMLInputElement>(null)

  function handleSaveSettings(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    toastifyWrapper.dismiss()

    const formErrors = []

    const work = Number(workTimeInput.current?.value)
    const shortBreak = Number(shortBreakTimeInput.current?.value)
    const longBreak = Number(longBreakTimeInput.current?.value)

    if (isNaN(work) || isNaN(shortBreak) || isNaN(longBreak)) {
      formErrors.push('Utilize apenas números, por favor.')
    }

    if (work < 1 || work > 100) {
      formErrors.push('Foco aceita valores entre 1 e 99 minutos.')
    }
    if (shortBreak < 1 || shortBreak > 31) {
      formErrors.push('Descanso curto aceita valores entre 1 e 30 minutos.')
    }
    if (longBreak < 1 || longBreak > 61) {
      formErrors.push('Descanso longo aceita valores entre 1 e 60 minutos.')
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => toastifyWrapper.error(error))
      return
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: { work, shortBreak, longBreak },
    })
    toastifyWrapper.success('Alterações salvas com sucesso.')
  }

  return (
    <MainTemplate>
      <Container>
        <Header>Configurações</Header>
        <form className={styles.form} action="" onSubmit={handleSaveSettings}>
          <p>Modifique os tempos dos ciclos.</p>

          <div className={styles.formRow}>
            <Input
              id="work"
              placeholder="25 min"
              ref={workTimeInput}
              defaultValue={state.config.work}
              type="number"
            >
              Foco
            </Input>
          </div>
          <div className={styles.formRow}>
            <Input
              id="shortBreak"
              placeholder="5 min"
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreak}
              type="number"
            >
              Descanso curto
            </Input>
          </div>
          <div className={styles.formRow}>
            <Input
              id="longBreak"
              placeholder="15 min"
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreak}
              type="number"
            >
              Descanso longo
            </Input>
          </div>

          <div className={styles.formButtonRow}>
            <Button
              aria-label="Salvar configurações"
              title="Salvar configurações"
            >
              <SaveIcon />
            </Button>
            {/* <Button
              aria-label="Voltar às configurações iniciais"
              title="Voltar às configurações iniciais"
            >
              <FileCogIcon />
            </Button> */}
          </div>
        </form>
      </Container>
    </MainTemplate>
  )
}
