import './globals.css'
import { HomePage } from '@/pages/home'
import { Header } from '@/widgets/header'
import { Container } from '@/shared/ui'

function App() {

  return (
  <Container>
    <Header/>
    <HomePage/>
  </Container>

  )
}

export default App
