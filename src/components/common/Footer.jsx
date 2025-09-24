const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#002B70] to-[#001A4D] text-white pt-16 ">
      <div className="max-w-10/12 max-md:max-w-11/12 mx-auto grid grid-cols-5 max-lg:grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-12 pb-16">

        {/* Bloque institucional */}
        <div>
          <div className="flex flex-col items-center gap-4">
            <img
              src="/logoFooter.png"
              alt="TPA Advisors"
              className="h-30 w-auto"
            />
          </div>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Servicios</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#auditoria" className="hover:underline"><i className="ri-file-chart-line mr-2"></i>Auditoría y Finanzas</a></li>
            <li><a href="#transferencia" className="hover:underline"><i className="ri-exchange-dollar-line mr-2"></i>Precios de Transferencia</a></li>
            <li><a href="#taxlegal" className="hover:underline"><i className="ri-bank-line mr-2"></i>Tax & Legal</a></li>
            <li><a href="#bpo" className="hover:underline"><i className="ri-briefcase-line mr-2"></i>Outsourcing (BPO)</a></li>
            <li><a href="#consultoria" className="hover:underline"><i className="ri-lightbulb-line mr-2"></i>Consultoría</a></li>
          </ul>
        </div>

        {/* Enlaces de interés */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Enlaces de Interés</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#cronograma" className="hover:underline"><i className="ri-calendar-check-line mr-2"></i>Cronograma de Declaraciones Latam</a></li>
            <li><a href="#obligatoriedad" className="hover:underline"><i className="ri-search-line mr-2"></i>Consulta de Obligatoriedad</a></li>
          </ul>
        </div>

        {/* Sede Central */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Sede Central</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:contacto@tpa-advisor.com" className="hover:underline"><i className="ri-mail-line mr-2"></i>contacto@tpa-advisor.com</a></li>
            <li><a href="https://goo.gl/maps/..." target="_blank" rel="noopener noreferrer" className="hover:underline"><i className="ri-map-pin-line mr-2"></i>Calle Los Gavilanes 159</a></li>
            <li><a href="#ubicacion" className="hover:underline"><i className="ri-building-line mr-2"></i>San Isidro, Lima, Perú</a></li>
            <li><a href="tel:+51937742578" className="hover:underline"><i className="ri-phone-line mr-2"></i>(51) 937742578</a></li>
            <li><a href="tel:+51937642578" className="hover:underline"><i className="ri-phone-line mr-2"></i>(+51) 937642578</a></li>
          </ul>
        </div>

        {/* Suscripción */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Suscribirse</h3>
          <p className="mb-4 text-sm">Recibí nuestras publicaciones y novedades institucionales.</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Tu email"
              className="px-4 py-2 rounded border border-slate-300 "
            />
            <button
              type="submit"
              className="bg-[#ECC82C] cursor-pointer text-white py-2 rounded hover:bg-amber-300 transition"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      {/* Pie final */}
      <div className="mt-6 text-center flex flex-col text-white">
        <img
          src="/logo2Footer.png"
          className="w-2/12 max-md:w-6/12 mx-auto"
          alt="Logo secundario"
        />
        <p className="text-lg max-md:text-base px-4 my-2">
          © {new Date().getFullYear()} TPA Advisors. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;