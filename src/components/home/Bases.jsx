import Marquee from "react-fast-marquee";

const Bases = () => {
  return (
    <section className="py-20 flex bg-[#F4F4F4] flex-col items-center w-full overflow-x-hidden ">
      <h2 className="p-5 text-5xl  text-center 2xl:max-w-[40%]">
        Transformamos ideas
y{" "}
        <span className="underline decoration-[#1447E6]">mejoramos industrias</span>
      </h2>
      <p className="text-center pb-20 text-xl max-w-7xl mx-auto text-neutral-600">Contamos con bases de datos reconocidas a nivel mundial y con respaldo tecnológico para nuestras asesorías locales e internacionales.</p>

      <div className="relative w-full max-w-11/12 max-sm:max-w-full mx-auto overflow-hidden">
        {/* Fade lateral */}
        <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"></div>

        {/* Carrusel */}
        <Marquee autoFill={true} speed={80} gradient={false}>
          {["1-1", "1-2", "1-3"].map((num) => (
            <img
              key={num}
              src={`/${num}.png`}
              alt={`Logo ${num}`}
              className="h-36 pr-10 cursor-pointer md:pr-30 grayscale-0 hover:grayscale transition duration-300 ease-in-out"
            />
          ))}
          <img
            src="/1-4.jpg"
            alt="Logo 1-4"
            className="h-30 pr-10 cursor-pointer md:pr-30 grayscale-0 hover:grayscale transition duration-300 ease-in-out"
          />
        </Marquee>
      </div>
    </section>
  );
};

export default Bases;