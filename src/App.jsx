import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import Footer from './components/Footer'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import SideBar from './components/SideBar'
import Wallpaper from './components/Wallpaper'

function App() {

  return (
    <div className="w-full bg-theme1">
      <Contact />
      <Header />
      <About />
      <Services />
      <Footer />
    </div>
  )
}

export default App
