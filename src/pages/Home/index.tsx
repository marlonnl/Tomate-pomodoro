import { Container } from '../../components/Container'
import { Counter } from '../../components/Counter'
import { Cycles } from '../../components/Cycles'
import { MainTemplate } from '../../templates/MainTemplate'

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <Counter />
        <Cycles />
      </Container>
    </MainTemplate>
  )
}
