import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import Footer from './components/Footer'
import { Header } from './components/Header'
import { Services } from './components/Services'
function App() {

  return (
    <>
      <div className="w-full bg-theme1">
        <Contact />
        <Header />
        <About />
        <Services />
        <Footer />
      </div>
    </>
  )
}

export default App
