import { Logo } from './components/Logo'
import { Header } from './components/Header'
import { Container } from './components/Container'

import { TimerIcon } from 'lucide-react'

import './styles/theme.css'
import './styles/global.css'

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
