import { Hero } from "../components/home/Hero"
import { Nav } from "../components/common/Nav"
import Carrusel from "../components/home/Carrusel"
import About from "../components/home/About"
import Bases from "../components/home/Bases"
import Footer from "../components/common/Footer"
import { Newsletter } from "../components/common/Newsletter"

export const Home = () => {
  return (
    <>
    <Nav/>
    <Hero/>
    <Carrusel/>
    <About/>
    <Bases/>
   
    </>

  )
}
