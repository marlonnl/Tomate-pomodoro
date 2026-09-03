import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { MainTemplate } from '../../templates/MainTemplate'

import styles from './styles.module.css'

export function Project() {
  return (
    <MainTemplate>
      <Container>
        <Header>Sobre o projeto</Header>

        <div className={styles.aboutText}>
          <p>
            Este aplicativo foi criado como atividade de aprendizado em React
            através de um curso de React JS 19 e Next.js 15 de Luiz Otávio
            Miranda. O objetivo principal foi a criação de um app para servir
            como portfólio e o uso da biblioteca do React com o mínimo de
            dependêcias possível. Para tanto, utilizou para a estilização CSS o
            module.css.
          </p>
          <p>
            As dependências utilizadas foram: react-router, date-fns,
            react-toastify e lucide-icons.
          </p>
          <p>
            Fique à vontade para olhar o código no{' '}
            <a href="https://github.com/marlonnl/Tomate-pomodoro">
              repositório
            </a>{' '}
            ou acessar o meu perfil no{' '}
            <a href="https://github.com/marlonnl">github</a>.
          </p>
        </div>
      </Container>
    </MainTemplate>
  )
}
