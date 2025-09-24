import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from './components/common/Nav'
import { Wsp } from './components/common/Wsp'
import { Newsletter } from './components/common/Newsletter'
import Footer from './components/common/Footer'
import { Home } from './pages/Home'
import Contact from './pages/Contact'
import AuditoriaEstadosFinancieros from './pages/AuditoriaEstadosFinancieros'
import ReporteLocal from './pages/ReporteLocal'
import ScrollToTop from './components/common/ScrollTop'


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/auditoria-estados-financieros" element={<AuditoriaEstadosFinancieros />} />
          <Route path="/reporte-local" element={<ReporteLocal />} />
        </Routes>
        <Wsp />
        <Newsletter />
        <Footer />
      </div>
    </Router>
  )
}

export default App