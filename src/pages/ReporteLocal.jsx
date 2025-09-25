import { useState } from 'react';

const ReporteLocal = () => {
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
      {/* hero section */}
      <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6  tracking-wider">
              REPORTE LOCAL
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
        </div>
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-yellow-400/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white/10 rounded-full"></div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Reporte Local - Análisis de datos financieros" 
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-4 rounded-xl shadow-lg">
                <i className="ri-file-chart-2-line text-3xl text-blue-900"></i>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-4">
                Reporte Local
              </h2>
              <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                El <strong>Reporte Local</strong> proporciona información detallada sobre las 
                transacciones intragrupo, realizadas o recibidas por la empresa 
                local, así como las transacciones con paraísos fiscales. Es 
                específica de cada país donde se documentar las actividades de las 
                unidades de negocio que operan en esa jurisdicción. De esta 
                manera, proporciona a la Administración Tributaria local, la 
                información que necesitan para determinar si los términos y 
                condiciones de las transacciones con partes relacionadas y/o 
                paraísos fiscales cumplen con el principio de plena 
                competencia.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  ¿QUIÉNES ESTÁN OBLIGADOS?
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-medium text-blue-800 mb-2">ANEXO 1:</p>
                    <p className="text-sm leading-relaxed">
                      Ingresos devengados mayores a 2,300 UIT (S/10,580,000), y Transacciones 
                      con partes vinculadas y/u operaciones desde, hacia o a través de PTNCBNI(*), 
                      igual o mayor a 100 UIT (S/460,000) y menor a 400 UIT (S/1,840,000).
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-800 mb-2">ANEXO 2, 3 Y 4:</p>
                    <p className="text-sm leading-relaxed">
                      Ingresos devengados mayores a 2,300 UIT (S/10,580,000), y Transacciones 
                      con partes vinculadas y/u operaciones desde, hacia o a través de PTNCBNI(*), 
                      igual o mayor a 400 UIT (S/1,840,000).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* sanction info */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-semibold text-red-900 mb-3">
                SANCIÓN
              </h3>
              <p className="text-gray-700 leading-relaxed">
                La sanción por no presentar o presentar de forma incompleta 
                la documentación e información referida a la Declaración 
                Jurada Informativa Reporte Local ascenderá al 0.6% de los 
                ingresos netos del contribuyente, con un tope máximo de 25 
                UIT (S/115,000).
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <i className="ri-file-text-line text-2xl text-blue-600"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 ml-3">Cumplimiento</h4>
                </div>
                <p className="text-gray-600">Asegura el cumplimiento normativo tributario</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <i className="ri-shield-check-line text-2xl text-green-600"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 ml-3">Transparencia</h4>
                </div>
                <p className="text-gray-600">Documentación clara de transacciones intragrupo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-blue-800/20 to-blue-900/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image and Titl */}
            <div className="text-white">
              <div className="flex items-center mb-8">
                <div className="relative">
                  <img 
                    src="../../especialista.png"
                    alt="Especialista TPA"
                    className=" w-10/12 mx-auto object-cover rounded-2xl shadow-2xl"
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

            {/* Form */}
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
                  className="w-full cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-6 rounded-md transition duration-300 transform hover:scale-[1.02]"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

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
                  Obtén información detallada sobre nuestros servicios de Precios de 
                  Transferencia y cómo podemos ayudar a tu empresa a cumplir con las 
                  obligaciones del Reporte Local.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 rounded-full inline-block mb-6 shadow-lg">
                  <i className="ri-file-chart-2-line text-4xl text-blue-900"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Precios de Transferencia</h3>
                <button 
                  onClick={() => alert('Descarga iniciada')}
                  className="bg-blue-900 text-white px-8 py-4 cursor-pointer rounded-lg font-semibold hover:bg-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
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

export default ReporteLocal;