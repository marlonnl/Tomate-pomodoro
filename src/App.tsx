import { Logo } from './components/Logo'
import { Container } from './components/Container'

import './styles/theme.css'
import './styles/global.css'
import { Menu } from './components/Menu'

export function App() {
  return (
    <div className="container-fluid">
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
    </div>
  )
}
