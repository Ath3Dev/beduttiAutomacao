import Routes from './Router'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </>
  )
}

export default App
