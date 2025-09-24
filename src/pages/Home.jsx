import { Hero } from "../components/home/Hero"
import Carrusel from "../components/home/Carrusel"
import About from "../components/home/About"
import Bases from "../components/home/Bases"
import Services from "../components/home/Services"
import Alianza from "../components/home/Alianza"
import Paises from "../components/home/Paises"
import BlogInvitation from "../components/home/BlogInvitation"

export const Home = () => {
  return (
    <>
      <Hero />
      <Carrusel />
      <About />
      <Bases />
      <Services />
      <Paises />
      <Alianza />
      <BlogInvitation />
    </>
  )
}