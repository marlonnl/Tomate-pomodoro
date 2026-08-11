import { Logo } from './components/Logo/Logo'
import { Header } from './components/Header/Header'

import { TimerIcon } from 'lucide-react'

import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container/Container'

export function App() {
  return (
    <div className="container-fluid">
      <Container>
        <Logo />
      </Container>
      <Container>
        <Header>
          Título
          <button>
            <TimerIcon />
          </button>
        </Header>
      </Container>
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          tempore quibusdam reprehenderit esse a nam, nulla provident ullam
          reiciendis recusandae voluptatum voluptate, perspiciatis ut ipsum
          nobis consequuntur veniam. Aperiam, pariatur?
        </p>
      </Container>
    </div>
  )
}
