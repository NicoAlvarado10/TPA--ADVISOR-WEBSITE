import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Auditoría y Finanzas",
    icon: "ri-line-chart-line",
    color: "rgba(29, 78, 216, 0.8)",
    description: "Transparencia, control y mejora continua.",
    subservices: [
      { label: "Auditoría financiera", icon: "ri-file-list-3-line" },
      { label: "Auditoría interna", icon: "ri-shield-check-line" },
      { label: "Due diligence", icon: "ri-search-eye-line" },
      { label: "Revisión limitada", icon: "ri-eye-line" },
      { label: "Normas NIIF y locales", icon: "ri-book-2-line" },
    ],
  },
  {
    title: "Precios de Transferencia",
    icon: "ri-global-line",
    color: "rgba(29, 78, 216, 0.8)",
    description: "Cumplimiento internacional con enfoque estratégico.",
    subservices: [
      { label: "Estudios de precios de transferencia", icon: "ri-bar-chart-box-line" },
      { label: "Informes locales y maestros", icon: "ri-file-paper-line" },
      { label: "Defensa ante fiscalizaciones", icon: "ri-shield-line" },
      { label: "Benchmarking y análisis funcional", icon: "ri-function-line" },
      { label: "Planificación estratégica", icon: "ri-lightbulb-line" },
    ],
  },
  {
    title: "Tax & Legal",
    icon: "ri-bank-line",
    color: "rgba(29, 78, 216, 0.8)",
    description: "Soluciones tributarias y legales integradas.",
    subservices: [
      { label: "Cumplimiento fiscal", icon: "ri-file-check-line" },
      { label: "Planificación tributaria", icon: "ri-calendar-check-line" },
      { label: "Reorganización societaria", icon: "ri-building-line" },
      { label: "Consultoría legal corporativa", icon: "ri-briefcase-line" },
      { label: "Defensa administrativa y judicial", icon: "ri-auction-fill" },
    ],
  },
  {
    title: "Outsourcing (BPO)",
    icon: "ri-briefcase-line",
    color: "rgba(29, 78, 216, 0.8)",
    description: "Gestión operativa eficiente y segura.",
    subservices: [
      { label: "Contabilidad externa", icon: "ri-calculator-line" },
      { label: "Liquidación de sueldos", icon: "ri-user-settings-line" },
      { label: "Gestión de impuestos", icon: "ri-money-dollar-circle-line" },
      { label: "Administración financiera", icon: "ri-pie-chart-2-line" },
      { label: "Control documental", icon: "ri-folder-line" },
    ],
  },
  {
    title: "Consultoría Estratégica",
    icon: "ri-lightbulb-flash-line",
    color: "rgba(29, 78, 216, 0.8)",
    description: "Diagnóstico, planificación y ejecución.",
    subservices: [
      { label: "Expansión internacional", icon: "ri-earth-line" },
      { label: "Evaluación de riesgos", icon: "ri-alert-line" },
      { label: "Transformación digital", icon: "ri-device-line" },
      { label: "Modelos de negocio", icon: "ri-flow-chart" },
      { label: "Asesoría institucional", icon: "ri-user-star-line" },
    ],
  },
];

const Services = () => {
  const cards = useRef([]);

  const lastPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    cards.current.forEach((card, index) => {
      const color = services[index].color;
      const inner = card?.querySelector('.card-inner');
      if (!card || !inner) return;

      const handleMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        lastPosition.current = { x, y };
        gsap.to(inner, {
          background: `radial-gradient(circle at ${x}px ${y}px, ${color}, transparent 80%)`,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const handleLeave = () => {
        const { x, y } = lastPosition.current;
        gsap.to(inner, {
          background: 'transparent',
          duration: 0.6,
          ease: 'power2.out',
        });
      };

      card.addEventListener('mousemove', handleMove);
      card.addEventListener('mouseleave', handleLeave);

      return () => {
        card.removeEventListener('mousemove', handleMove);
        card.removeEventListener('mouseleave', handleLeave);
      };
    });
  }, []);

  return (
    <section
      className="px-10 my-20 max-sm:p-5 flex flex-col  justify-center items-center bg-white text-slate-900"
      id="servicios"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-semibold   max-sm:text-center"
      >
        Nuestros <span className="text-[#E6C12C]">Servicios</span>
      </motion.h2>
          <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay:0.2 }}
        className="text-xl text-slate-700 mt-4 max-sm:text-center"
      >
   En TPA Advisors hacemos las cosas bien
      </motion.p>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6 max-w-11/12 w-full">
        {services.map((service, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            ref={(el) => (cards.current[index] = el)}
            className="relative rounded-xl w-full border bg-gradient-to-b from-[#001b46] to-[#03276e] overflow-hidden"
          >
            <div className="card-inner group p-10 max-sm:p-5 flex flex-col gap-4 justify-between relative z-10 transition-colors duration-300">
              <div className="bg-[#F5F5F5] rounded-full w-[60px] h-[60px] flex justify-center items-center">
                <i className={`${service.icon} text-3xl text-[#002B70]`}></i>
              </div>
              <h3 className="text-3xl max-sm:text-2xl my-2 text-white">{service.title}</h3>
              <h4 className="text-white">{service.description}</h4>
              <ul className="space-y-2 text-white text-sm">
  {service.subservices.map((item, i) => (
    <li key={i} className="flex items-center gap-2">
      <i className={`${item.icon} text-[#ECC82C] text-base`}></i>
      <span>{item.label}</span>
    </li>
  ))}
</ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Services;