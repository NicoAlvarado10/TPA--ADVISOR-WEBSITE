import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [selectedCountry, setSelectedCountry] = useState('Peru');
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    service: '',
    isClient: '',
    message: ''
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
    console.log('Formulario enviado:', formData);
  };

  const countries = {
    Peru: {
      offices: [
        {
          city: 'Lima',
          address: 'Calle Los Gavilanes 159, San Isidro, Lima, Perú',
          phone: '(+51) 937 642 578',
          mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3147!2d-77.0428!3d-12.1006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA2JzAyLjIiUyA3N8KwMDInMzQuMSJX!5e0!3m2!1sen!2spe!4v1234567890"
        },
        {
          city: 'Arequipa',
          address: 'Av. Pizarro 210 Dpto. C-2 Paucarpata - Arequipa',
          phone: '(+51) 937 642 578',
          mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.8147!2d-71.5428!3d-16.4006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDI0JzAyLjIiUyA3McKwMzInMzQuMSJX!5e0!3m2!1sen!2spe!4v1234567890"
        }
      ]
    },
    CostaRica: {
      offices: [
        {
          city: 'San José',
          address: 'Escazú, Plaza Tempo, Lobby A, piso 4, San José - Costa Rica',
          phone: '(+506) 2273-2008',
          mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1147!2d-84.1428!3d9.9306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnNTAuMiJOIDg0wrAwOCczNC4xIlc!5e0!3m2!1sen!2scr!4v1234567890"
        }
      ]
    },
    Chile: {
      offices: [
        {
          city: 'Santiago',
          address: 'Rosal 331, piso 4, Santiago de Chile - Chile',
          phone: '(+56) 22550 2400',
          phone2: '(+56) 2 29797857',
          mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.1147!2d-70.6428!3d-33.4506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI3JzAyLjIiUyA3MMKwMzgnMzQuMSJX!5e0!3m2!1sen!2scl!4v1234567890"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002B70] to-[#001A4D] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            CONTACTO
          </motion.h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* main contact section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="mb-8">
              <div className="w-16 h-1 bg-[#ECC82C] mb-6"></div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">Contacto</p>
              
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                ¿CÓMO PODEMOS<br />
                AYUDARTE?
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                Si tiene alguna duda respecto a qué servicio es el más adecuado para su necesidad, 
                o tiene una pregunta específica para alguno de nuestros especialistas, por favor 
                envíenos un mensaje utilizando este formulario.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Nuestra política de atención general nos permite prometerle una respuesta clara 
                en un plazo menor a un día hábil.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="bg-gray-800 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Empresa / Firma
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Nombre de tu compañía o firma"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-600 border-0 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#ECC82C] transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-600 border-0 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#ECC82C] transition"
                    required
                  />
                </div>

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
                    className="w-full px-4 py-3 bg-gray-600 border-0 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#ECC82C] transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-600 border-0 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#ECC82C] transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    placeholder="Mensaje"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-600 border-0 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#ECC82C] transition resize-none"
                    required
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
                  className="w-full bg-[#ECC82C] hover:bg-yellow-400 text-gray-900 font-bold py-4 px-6 rounded-md transition duration-300 transform hover:scale-[1.02]"
                >
                  Enviar
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* locations section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8">UBICACIONES</h2>
          </motion.div>

          {/* country tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-white rounded-full shadow-md overflow-hidden">
              {Object.keys(countries).map((country, index) => (
                <button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`px-8 py-3 font-semibold transition-all cursor-pointer duration-300 ${
                    selectedCountry === country
                      ? 'bg-[#ECC82C] text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  } ${index === 0 ? 'rounded-l-full' : ''} ${
                    index === Object.keys(countries).length - 1 ? 'rounded-r-full' : ''
                  }`}
                >
                  {country === 'Peru' ? 'Perú' : country === 'CostaRica' ? 'Costa Rica' : country}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* contact information */}
            <motion.div
              key={selectedCountry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#002B70] mb-2">
                  Contáctanos para que podamos
                </h3>
                <h4 className="text-2xl font-bold text-[#ECC82C] mb-6">
                  resolver tus <span className="text-[#ECC82C]">dudas y consultas</span>
                </h4>

                <a 
                  href="mailto:contacto@tpa-advisor.com"
                  className="flex items-center gap-3 text-[#002B70] hover:text-blue-700 transition mb-8 text-lg"
                >
                  <i className="ri-mail-line text-xl"></i>
                  contacto@tpa-advisor.com
                </a>
              </div>

              {countries[selectedCountry].offices.map((office, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <h5 className="text-xl font-semibold text-[#002B70] mb-4">{office.city}</h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-gray-600">
                      <i className="ri-map-pin-line text-xl text-[#002B70] mt-1"></i>
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <i className="ri-phone-line text-xl text-[#002B70]"></i>
                      <a href={`tel:${office.phone}`} className="hover:text-[#002B70] transition">
                        {office.phone}
                      </a>
                    </div>
                    {office.phone2 && (
                      <div className="flex items-center gap-3 text-gray-600">
                        <i className="ri-phone-line text-xl text-[#002B70]"></i>
                        <a href={`tel:${office.phone2}`} className="hover:text-[#002B70] transition">
                          {office.phone2}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <motion.div
                key={selectedCountry}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="h-full min-h-[500px]"
              >
                <iframe
                  src={countries[selectedCountry].offices[0].mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa de ${countries[selectedCountry].offices[0].city}`}
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#002B70] mb-2">Descarga</h2>
              <h3 className="text-3xl font-bold text-[#ECC82C] mb-6">nuestro <br />BROCHURE</h3>
            </div>
            <div className="text-center lg:text-right">
              <div className="flex items-center justify-center lg:justify-end gap-4 mb-6">
                <div className="w-16 h-16 bg-[#ECC82C] rounded-full flex items-center justify-center">
                  <i className="ri-crown-line text-2xl text-[#002B70]"></i>
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-semibold text-gray-600">Brochure Corporativo</h4>
                </div>
              </div>
              <button className="bg-[#002B70] cursor-pointer hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                DESCARGAR AHORA
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;