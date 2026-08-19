import { Container } from '../../components/Container'
import { GenericHtml } from '../../components/GenericHtml'
import { Header } from '../../components/Header'
import { MainTemplate } from '../../templates/MainTemplate'

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Header>Erro 404: página não encontrada</Header>
          <p>A página que você tentou acessar não existe.</p>
          <p>Utilize o menu acima para navegar pelo app.</p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  )
}
