import { useEffect } from 'react'

import { Container } from '../../components/Container'
import { Counter } from '../../components/Counter'
import { Cycles } from '../../components/Cycles'
import { MainTemplate } from '../../templates/MainTemplate'
import { APPNAME } from '../../utils/appName'

export function Home() {
  useEffect(() => {
    document.title = `${APPNAME}`
  }, [])

  return (
    <MainTemplate>
      <Container>
        <Counter />
        <Cycles />
      </Container>
    </MainTemplate>
  )
}
