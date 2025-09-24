import { useState } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [showServices, setShowServices] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const servicesData = {
    "Auditoría y Finanzas": [
      "Auditoría de Estados Financieros",
      "Diagnóstico e Implementación de NIIF / IFRS",
      "Revisión mediante Procedimientos Previamente Convenidos",
      "Due Diligence Integral",
      "Diagnóstico Financiero Integral",
      "Estudio de mercado",
      "Evaluación de Proyectos de Inversión",
      "Valorización Patrimonial y de Empresas",
      "Valorización de Tangibles",
      "Valorización de Intangibles",
      "Valoración de Derivados",
      "Gestión de riesgos",
      "Control de razonabilidad de Costos y Gastos"
    ],
    "Precios de Transferencia": [
      "Reporte Local",
      "Reporte Maestro",
      "Reporte País por País",
      "Auditoría de Precios de Transferencia",
      "Estudio Técnico de Precios de Transferencia",
      "Test de Beneficio",
      "Políticas de Precios de Transferencia",
      "Beneficiario Final"
    ],
    "Tax & Legal": [
      "Asesoría Tributaria Integral",
      "Revisión de Declaraciones",
      "Consultoría en Reorganizaciones",
      "Defensa Fiscal",
      "Planeamiento Tributario"
    ],
    "Outsourcing (BPO)": [
      "Contabilidad Outsourcing",
      "Nómina y RRHH",
      "Facturación Electrónica",
      "Reportes Gerenciales"
    ],
    "Consultoría": [
      "Consultoría Estratégica",
      "Asesoría Internacional",
      "Implementación de Sistemas",
      "Mejora de Procesos"
    ]
  };

  // Mapeo de servicios 
  const serviceRoutes = {
    "Auditoría de Estados Financieros": "/auditoria-estados-financieros",
    "Reporte Local": "/reporte-local",  

  };

  const handleServiceHover = (service) => {
    setActiveService(service);
  };

  const handleServiceLeave = () => {
    setActiveService(null);
  };

  // Funcion para cerrar 
  const handleMenuLeave = () => {
    setTimeout(() => {
      setShowServices(false);
      setActiveService(null);
    }, 150);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[90%] mx-auto 2xl:my-2 py-4 flex items-center justify-between">
        
        {/* Logos */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src="/LOGO-TPA-WEB.png" alt="Logo TPA" className="h-20" />
          </Link>
          <img src="/logo2.png" alt="Logo secundario" className="h-12" />
        </div>

        {/* menu de escritorio */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li><Link to="/#nosotros" className="hover:text-blue-500 transition font-semibold">Nosotros</Link></li>
            
            {/* Servicios */}
            <li className="relative group">
              <button 
                className="hover:text-blue-500 transition flex items-center gap-1 cursor-pointer font-semibold"
                onMouseEnter={() => setShowServices(true)}
              >
                Servicios <i className="ri-arrow-down-s-line text-lg"></i>
              </button>
              
              
              <div 
                className={`absolute top-full left-0 w-[800px] h-4 ${showServices ? 'block' : 'hidden'}`}
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              ></div>
              
              {showServices && (
                <div 
                  className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-xl w-[800px] z-50"
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => setShowServices(false)}
                >
                  <div className="flex">
                    {/*Categorías principales */}
                    <div className="w-1/3 bg-gray-50 p-4 rounded-l-lg">
                      <h3 className="text-xs font-bold text-blue-700 mb-3 uppercase tracking-wide">SERVICIOS</h3>
                      <ul className="space-y-1">
                        {Object.keys(servicesData).map((service) => (
                          <li 
                            key={service}
                            onMouseEnter={() => handleServiceHover(service)}
                            className={`p-3 rounded cursor-pointer text-sm font-semibold transition-all duration-200 ${
                              activeService === service 
                                ? 'bg-yellow-400 text-black transform scale-[1.02]' 
                                : 'hover:bg-gray-200 hover:transform hover:scale-[1.01]'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{service}</span>
                              <i className="ri-arrow-right-s-line text-lg"></i>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 p-3 bg-white rounded border">
                        <h4 className="text-xs font-bold text-blue-700 mb-2 uppercase tracking-wide">PUBLICACIONES</h4>
                        <p className="text-xs text-gray-600">Accede a nuestros estudios y publicaciones especializadas</p>
                      </div>
                    </div>
                    
                    {/* Subservicios */}
                    <div className="w-2/3 p-6 min-h-[400px]">
                      {activeService ? (
                        <div>
                          <h3 className="text-lg font-bold text-blue-700 mb-4 border-b pb-2">{activeService}</h3>
                          <ul className="grid grid-cols-1 gap-1 max-h-[320px] overflow-y-auto">
                            {servicesData[activeService].map((subservice, index) => (
                              <li key={index}>
                                {serviceRoutes[subservice] ? (
                                  
                                  <Link
                                    to={serviceRoutes[subservice]}
                                    className="block px-3 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 rounded transition-all duration-150 hover:border-l-4 hover:border-blue-500"
                                    onClick={() => setShowServices(false)}
                                  >
                                    <i className="ri-arrow-right-s-line text-xs mr-2 opacity-60"></i>
                                    {subservice}
                                  </Link>
                                ) : (
                                  
                                  <a
                                    href={`#servicio-${index}`}
                                    className="block px-3 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 rounded transition-all duration-150 hover:border-l-4 hover:border-blue-500"
                                    onClick={() => setShowServices(false)}
                                  >
                                    <i className="ri-arrow-right-s-line text-xs mr-2 opacity-60"></i>
                                    {subservice}
                                  </a>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                          <div className="text-center">
                            <i className="ri-service-line text-4xl mb-4 opacity-30"></i>
                            <p className="text-sm font-medium">Pasa el mouse sobre un servicio</p>
                            <p className="text-xs text-gray-400 mt-1">para ver los detalles disponibles</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </li>
            
            <li><Link to="/#equipo" className="hover:text-blue-500 transition font-semibold">Equipo</Link></li>
            <li><Link to="/#recursos" className="hover:text-blue-500 transition font-semibold">Recursos</Link></li>
            <li><Link to="/contacto" className="hover:text-blue-500 transition font-semibold">Contacto</Link></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="flex items-center max-md:hidden gap-4 text-2xl text-slate-600">
          <a href="https://www.linkedin.com/company/tpa-advisors" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <i className="ri-linkedin-fill"></i>
          </a>
          <a href="https://www.instagram.com/tpa.advisors" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="https://www.youtube.com/@TPA-Advisors" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
            <i className="ri-youtube-fill"></i>
          </a>
          <a href="https://www.facebook.com/tpa.advisors" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <i className="ri-facebook-fill"></i>
          </a>
        </div>

        <button
          className="text-3xl text-slate-700 md:hidden cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className={mobileOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed top-[110px] left-0 w-full bg-white px-6 pb-6 shadow-md z-40">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li><Link to="/#nosotros" className="hover:text-blue-500 transition font-semibold" onClick={() => setMobileOpen(false)}>Nosotros</Link></li>
            <li>
              <button
                onClick={() => setShowServices(!showServices)}
                className="hover:text-blue-500 transition flex items-center gap-1 font-semibold"
              >
                Servicios <i className="ri-arrow-down-s-line text-lg"></i>
              </button>
              {showServices && (
                <div className="mt-2 bg-white border rounded shadow-lg w-full z-10">
                  {Object.entries(servicesData).map(([category, services]) => (
                    <div key={category} className="border-b last:border-b-0">
                      <div className="px-4 py-2 bg-gray-100 font-semibold text-blue-700">{category}</div>
                      <ul>
                        {services.map((service, index) => (
                          <li key={index}>
                            {serviceRoutes[service] ? (
                              <Link 
                                to={serviceRoutes[service]} 
                                className="block px-6 py-2 text-sm hover:bg-gray-50" 
                                onClick={() => setMobileOpen(false)}
                              >
                                {service}
                              </Link>
                            ) : (
                              <a 
                                href={`#servicio-${index}`} 
                                className="block px-6 py-2 text-sm hover:bg-gray-50" 
                                onClick={() => setMobileOpen(false)}
                              >
                                {service}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li><Link to="/#recursos" className="hover:text-blue-500 transition font-semibold" onClick={() => setMobileOpen(false)}>Recursos</Link></li>
            <li><Link to="/contacto" className="hover:text-blue-500 transition font-semibold" onClick={() => setMobileOpen(false)}>Contacto</Link></li>
          </ul>

          {/* Redes sociales */}
          <div className="flex items-center gap-4 mt-6 text-2xl text-slate-600">
            <a href="https://www.linkedin.com/company/tpa-advisors" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="https://www.instagram.com/tpa.advisors" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="https://www.youtube.com/@TPA-Advisors" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
              <i className="ri-youtube-fill"></i>
            </a>
            <a href="https://www.facebook.com/tpa.advisors" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <i className="ri-facebook-fill"></i>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};