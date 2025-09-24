import { motion } from 'framer-motion';
import heroimg from "../../../public/hero.jpg";

export const Hero = () => {
  return (
    <section className="relative w-11/12 max-sm:w-full mx-auto  rounded-2xl bg-gradient-to-br from-[#002B70] to-[#001A4D] text-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-10 max-sm:p-6 md:py-20"
        >
          <h1 className="text-4xl 2xl:text-7xl font-semibold leading-tight mb-4">
            Confianza global, soluciones locales
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Asesoría contable y tributaria con respaldo internacional. Miembros de PrimeGlobal, conectamos experiencia técnica con visión estratégica para empresas que crecen.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
            >
              Solicita asesoría <i className="ri-arrow-right-line text-xl"></i>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#d6b42a] font-semibold rounded-md hover:bg-yellow-400 transition"
            >
              Conoce nuestros servicios
            </a>
          </div>

          {/* Indicadores institucionales */}
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-3xl font-bold text-[#ECC82C]">+15</p>
              <p className="text-sm text-white/80">Años de experiencia</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-3xl font-bold text-[#ECC82C]">+1.350</p>
              <p className="text-sm text-white/80">Empresas satisfechas</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="text-3xl font-bold text-[#ECC82C]">+19</p>
              <p className="text-sm text-white/80">Países atendidos</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Imagen institucional */}
        <motion.div
          initial={{ opacity: 0,  }}
          animate={{ opacity: 1,  }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-full w-full"
        >
          <img
            src={heroimg}
            alt="TPA Hero"
            className="w-full h-full object-cover md:rounded-r-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
};