import { Hero } from "../components/home/Hero"
import Carrusel from "../components/home/Carrusel"
import About from "../components/home/About"
import Bases from "../components/home/Bases"

export const Home = () => {
  return (
    <>
      <Hero />
      <Carrusel />
      <About />
      <Bases />
    </>
  )
}