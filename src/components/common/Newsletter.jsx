export const Newsletter = () => {
  return (
    <section className=" bg-gradient-to-bl from-[#002B70] to-[#001A4D] text-white py-22 px-4 mx-auto">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl  mb-3">
          Únete a nuestro Newsletter
        </h2>
        <p className="text-white/80 text-sm md:text-base mb-6">
          Recibe cada mes ideas, análisis y herramientas clave para impulsar tus decisiones de negocio. Información útil, directa a tu bandeja de entrada.
        </p>

        <form className="flex flex-col md:flex-row items-center gap-3 justify-center text-sm">
          <input
            type="email"
            placeholder="Ingresa tu email"
            className="px-3 py-2 rounded-md w-full md:w-1/2 text-slate-900 bg-gray-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#ECC82C]"
          />
          <input
            type="text"
            placeholder="Nombre completo"
            className="px-3 py-2 rounded-md w-full md:w-1/2 text-slate-900 bg-gray-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#ECC82C]"
          />
          <button
            type="submit"
            className="bg-[#ECC82C] cursor-pointer text-slate-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-400 transition w-full md:w-auto"
          >
            Suscribirse
          </button>
        </form>
      </div>
    </section>
  );
};