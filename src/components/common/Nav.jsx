import { useState } from "react";
import logo2 from "../../../public/logo2.png";
import logo from "../../../public/LOGO-TPA-WEB.png";

export const Nav = () => {
  const [showServices, setShowServices] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-[90%] mx-auto 2xl:my-2  py-4 flex items-center justify-between">
        
        {/* Logos */}
        <div className="flex items-center gap-4">
          <a href="#">
            <img src={logo} alt="Logo TPA" className="h-20" />
          </a>
          <img src={logo2} alt="Logo secundario" className="h-12" />
        </div>

        {/* Menú de escritorio */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li><a href="#nosotros" className="hover:text-blue-500 transition font-semibold">Nosotros</a></li>
            <li className="relative group">
              <button className="hover:text-blue-500 transition flex items-center gap-1 cursor-pointer font-semibold">
                Servicios <i className="ri-arrow-down-s-line text-lg"></i>
              </button>
              <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-56 z-10 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300">
                <li><a href="#servicio1" className="block px-4 py-2 font-semibold hover:bg-slate-100">Precios de transferencia</a></li>
                <li><a href="#servicio2" className="block px-4 py-2 font-semibold hover:bg-slate-100">Auditoría contable</a></li>
                <li><a href="#servicio3" className="block px-4 py-2 font-semibold hover:bg-slate-100">Cumplimiento tributario</a></li>
                <li><a href="#servicio4" className="block px-4 py-2 font-semibold hover:bg-slate-100">Consultoría estratégica</a></li>
                <li><a href="#servicio5" className="block px-4 py-2 font-semibold hover:bg-slate-100">Asesoría internacional</a></li>
              </ul>
            </li>
            <li><a href="#equipo" className="hover:text-blue-500 transition font-semibold">Equipo</a></li>
            <li><a href="#recursos" className="hover:text-blue-500 transition font-semibold">Recursos</a></li>
            <li><a href="#contacto" className="hover:text-blue-500 transition font-semibold">Contacto</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="flex items-center max-md:hidden gap-4 text-2xl text-slate-600">
          <a href="https://www.linkedin.com/company/tpa-advisors" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><i className="ri-linkedin-fill"></i></a>
          <a href="https://www.instagram.com/tpa.advisors" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><i className="ri-instagram-line"></i></a>
          <a href="https://www.youtube.com/@TPA-Advisors" target="_blank" rel="noopener noreferrer" className="hover:text-red-600"><i className="ri-youtube-fill"></i></a>
          <a href="https://www.facebook.com/tpa.advisors" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><i className="ri-facebook-fill"></i></a>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="text-3xl text-slate-700 md:hidden cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className={mobileOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {/* Menú móvil como overlay */}
      {mobileOpen && (
        <div className="fixed top-[110px] left-0 w-full bg-white px-6 pb-6 shadow-md z-40">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li><a href="#nosotros" className="hover:text-blue-500 transition font-semibold">Nosotros</a></li>
            <li>
              <button
                onClick={() => setShowServices(!showServices)}
                className="hover:text-blue-500 transition flex items-center gap-1 font-semibold"
              >
                Servicios <i className="ri-arrow-down-s-line text-lg"></i>
              </button>
              {showServices && (
                <ul className="mt-2 bg-white text-black rounded shadow-lg w-full z-10">
                  <li><a href="#servicio1" className="block px-4 py-2 font-semibold hover:bg-slate-100">Precios de transferencia</a></li>
                  <li><a href="#servicio2" className="block px-4 py-2 font-semibold hover:bg-slate-100">Auditoría contable</a></li>
                  <li><a href="#servicio3" className="block px-4 py-2 font-semibold hover:bg-slate-100">Cumplimiento tributario</a></li>
                  <li><a href="#servicio4" className="block px-4 py-2 font-semibold hover:bg-slate-100">Consultoría estratégica</a></li>
                  <li><a href="#servicio5" className="block px-4 py-2 font-semibold hover:bg-slate-100">Asesoría internacional</a></li>
                </ul>
              )}
            </li>
            <li><a href="#recursos" className="hover:text-blue-500 transition font-semibold">Recursos</a></li>
            <li><a href="#contacto" className="hover:text-blue-500 transition font-semibold">Contacto</a></li>
          </ul>

          {/* Redes sociales */}
          <div className="flex items-center gap-4 mt-6 text-2xl text-slate-600">
            <a href="https://www.linkedin.com/company/tpa-advisors" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><i className="ri-linkedin-fill"></i></a>
            <a href="https://www.instagram.com/tpa.advisors" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><i className="ri-instagram-line"></i></a>
            <a href="https://www.youtube.com/@TPA-Advisors" target="_blank" rel="noopener noreferrer" className="hover:text-red-600"><i className="ri-youtube-fill"></i></a>
            <a href="https://www.facebook.com/tpa.advisors" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><i className="ri-facebook-fill"></i></a>
          </div>
        </div>
      )}
    </nav>
  );
};