import { motion } from 'framer-motion';

const countries = [
  { label: "Argentina", file: "argentina" },
  { label: "Bolivia", file: "bolivia" },
  { label: "Brasil", file: "brasil" },
  { label: "Chile", file: "chile" },
  { label: "Colombia", file: "colombia" },
  { label: "Costa Rica", file: "costa-rica" },
  { label: "Ecuador", file: "ecuador" },
  { label: "El Salvador", file: "el-salvador" },
  { label: "Guatemala", file: "guatemala" },
  { label: "Honduras", file: "honduras" },
  { label: "México", file: "mexico" },
  { label: "Nicaragua", file: "nicaragua" },
  { label: "Puerto Rico", file: "puerto-rico" },
  { label: "Paraguay", file: "paraguay" },
  { label: "Perú", file: "peru" },
  { label: "República Dominicana", file: "republica-dominicana" },
  { label: "Uruguay", file: "uruguay" },
  { label: "Venezuela", file: "venezuela" },
];

const Paises = () => {
  return (
    <section className=" text-white flex flex-col bg-[#CEAC26] lg:flex-row items-center justify-center gap-10">
       {/* Bloque de texto y países */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br py-20 from-[#002B70] to-[#001A4D] flex flex-col items-center gap-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl  max-sm:max-w-11/12 w-2xl font-semibold text-center"
        >
          Contamos con presencia en 19 países de Latinoamérica
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm md:text-base text-center"
        >
          {countries.map((country, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-center cursor-pointer gap-2 hover:scale-105  duration-150 bg-white text-slate-900 rounded-md p-2 shadow-sm hover:shadow-md transition"
            >
              <img
                src={`/${country.file}.png`}
                alt={country.label}
                className="w-8 h-8 object-contain "
              />
              <span>{country.label}</span>
            </li>
          ))}
        </motion.ul>
      </div> 
      {/* Imagen institucional */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 flex justify-center "
      >
        <img
          src="/paises.png"
          alt="Mapa institucional"
          className="max-w-[500px] w-full h-auto object-contain"
        />
      </motion.div>

     
    </section>
  );
};

export default Paises;