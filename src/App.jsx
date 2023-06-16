import './App.css'
import { styled } from 'styled-components'
import Summary from './components/Summary'

const Container = styled.div`
  height: 100vh;
`

function App() {
  return (
    <>
      <Container>
        <Summary />
      </Container>
    </>
  )
}

export default App
