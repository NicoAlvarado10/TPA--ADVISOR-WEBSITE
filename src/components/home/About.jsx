import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24">
      <div className="max-w-10/12 max-md:max-w-11/12 mx-auto  flex flex-col md:flex-row gap-12">
        
        {/* Texto institucional + PrimeGlobal */}
        <div className="w-full md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-semibold tracking-wider text-slate-900 mb-2"
          >
            Firma Miembro de <span className="text-[#E6C12C]">PrimeGlobal</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg mb-6"
          >
            Somos firma miembro de <strong>PrimeGlobal</strong>, galardonada red internacional de auditores y consultores, compuesta por más de <strong>300 firmas altamente exitosas</strong> en más de <strong>112 países</strong>, con un ingreso anual combinado de más de <strong>US$ 4,3 mil millones</strong>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-600 text-lg mb-6"
          >
            PrimeGlobal proporciona herramientas y recursos que ayudan a brindar servicios superiores de contabilidad, auditoría, impuestos y asesoría a clientes en todo el mundo.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="#nosotros"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white  rounded-md transition"
          >
            Conocé más sobre nosotros <i className="ri-arrow-right-line text-xl"></i>
          </motion.a>
        </div>
        
        {/* Video institucional + imagen */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-video w-full max-w-[700px] mx-auto"
          >
            <iframe
              width="540"
              height="304"
              src="https://www.youtube.com/embed/9m2c4mW4RVE"
              title="Nuestros servicios"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            src="/logros.png"
            alt="Logros institucionales"
            className="w-full max-w-[540px] rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default About;