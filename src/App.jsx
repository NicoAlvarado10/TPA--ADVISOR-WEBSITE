
import './App.css'
import { Wsp } from './components/common/Wsp'
import { Home } from './pages/Home'
import { Newsletter } from './components/common/Newsletter'
import Footer from './components/common/Footer'
function App() {

  return (
    <>
     <Home/>
     <Wsp/>
      <Newsletter/>
    <Footer/>
    </>
  )
}

export default App
