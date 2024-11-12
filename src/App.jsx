import './App.css'
import { About } from './components/About'
import Footer from './components/Footer'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'

function App() {

  return (
    <div className="w-full bg-theme1">
      <Navbar />
      <Header />
      <Services />
      <About />
      <Footer />
    </div>
  )
}

export default App
