import { Logo } from './components/Logo'
import { Container } from './components/Container'

import './styles/theme.css'
import './styles/global.css'
import { Menu } from './components/Menu'
import { Counter } from './components/Counter'

export function App() {
  return (
    <div className="container-fluid">
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <Counter />
      </Container>
    </div>
  )
}
