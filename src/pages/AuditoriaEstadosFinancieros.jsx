import { useState } from 'react';

const AuditoriaEstadosFinancieros = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    email: '',
    telefono: '',
    pais: '',
    empresa: '',
    mensaje: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    alert('Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.');
  };

  const paises = [
    'Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Costa Rica',
    'Ecuador', 'El Salvador', 'Guatemala', 'Honduras', 'México',
    'Nicaragua', 'Panamá', 'Paraguay', 'Perú', 'República Dominicana',
    'Uruguay', 'Venezuela'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              AUDITORÍA DE ESTADOS FINANCIEROS
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-yellow-400/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white/10 rounded-full"></div>
      </div>

      {/* main content section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Auditoría de Estados Financieros" 
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-4 rounded-xl shadow-lg">
                <i className="ri-file-chart-line text-3xl text-blue-900"></i>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-4">
                Auditoría de Estados Financieros
              </h2>
              <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                El objetivo principal de esta revisión es verificar si los estados 
                financieros reflejan adecuadamente la situación financiera, los 
                resultados de operación y los flujos de efectivo de la entidad de 
                acuerdo con los principios de contabilidad aplicables. Las 
                auditorías están siendo más frecuentes, así como la complejidad de 
                las normativas contables fundamentales, los principios contables 
                generalmente aceptados y los informes de las Normas Internacionales 
                de Información Financiera (NIIF).
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  ¿Por qué es importante?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Es importante resaltar que una auditoría de estados financieros 
                  no garantiza la detección de fraudes o errores, pero ofrece una 
                  evaluación independiente sobre la adecuación de los estados 
                  financieros presentados. Además, es una herramienta crucial 
                  para generar confianza entre inversionistas, prestamistas y 
                  otras partes interesadas en cuanto a la precisión de la 
                  información financiera de una organización.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <i className="ri-shield-check-line text-2xl text-blue-600"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 ml-3">Confiabilidad</h4>
                </div>
                <p className="text-gray-600">Genera confianza en inversores y stakeholders</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <i className="ri-search-line text-2xl text-green-600"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 ml-3">Transparencia</h4>
                </div>
                <p className="text-gray-600">Evaluación independiente y objetiva</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact form section */}
      <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-blue-800/20 to-blue-900/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Titulo */}
            <div className="text-white">
              <div className="flex items-center mb-8">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616c1f97cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    alt="Especialista TPA"
                    className="w-64 h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-yellow-400 p-4 rounded-xl shadow-lg">
                    <i className="ri-user-star-line text-2xl text-blue-900"></i>
                  </div>
                </div>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Contacta con nuestros especialistas
              </h2>
              <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-xl text-blue-100">
                Ingresa tus datos, nos pondremos en contacto contigo.
              </p>
            </div>

            
            <div className="bg-gray-800 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Nombres y Apellidos
                  </label>
                  <input
                    type="text"
                    name="nombres"
                    placeholder="Nombres y Apellidos"
                    value={formData.nombres}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-600 border-0 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-600 border-0 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="Teléfono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-600 border-0 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      País
                    </label>
                    <select
                      name="pais"
                      value={formData.pais}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-600 border-0 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                      required
                    >
                      <option value="" className="text-gray-800">Selecciona un país</option>
                      {paises.map(pais => (
                        <option key={pais} value={pais} className="text-gray-800">{pais}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-600 border-0 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    placeholder="Mensaje"
                    rows="5"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-600 border-0 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none"
                  ></textarea>
                </div>

                {/* reCAPTCHA placeholder */}
                <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-md">
                  <input type="checkbox" className="w-5 h-5" required />
                  <span className="text-white text-sm">No soy un robot</span>
                  <div className="ml-auto">
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                      <i className="ri-checkbox-circle-line text-white text-sm"></i>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-6 rounded-md transition duration-300 transform hover:scale-[1.02]"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Download Brochure Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Descarga nuestro <span className="text-yellow-500">BROCHURE</span>
                </h2>
                <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Obtén información detallada sobre nuestros servicios de auditoría 
                  y cómo podemos ayudar a tu empresa a mantener la transparencia 
                  y confiabilidad en sus estados financieros.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 rounded-full inline-block mb-6 shadow-lg">
                  <i className="ri-crown-line text-4xl text-blue-900"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Auditoría</h3>
                <button 
                  onClick={() => alert('Descarga iniciada')}
                  className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  DESCARGAR AHORA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditoriaEstadosFinancieros;