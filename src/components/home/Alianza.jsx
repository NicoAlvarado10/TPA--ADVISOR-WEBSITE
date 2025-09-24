import Marquee from "react-fast-marquee";

const Alianza = () => {
  return (
    <section className=" bg-[#F4F4F4] py-30 flex flex-col items-center w-full overflow-x-hidden ">
      <h2 className="p-5 text-5xl  text-center  2xl:max-w-[40%]">
        Alianzas{" "}
        <span className="underline decoration-[#1447E6] ">Estrategicas</span> 
      </h2>
    <p className="text-slate-800 text-xl max-w-7xl mx-auto text-center pb-20">
        En nuestro espíritu colaborativo, buscamos brindar mayor valor a nuestros clientes mediante alianzas nacionales e internacionales, incluyendo Chile y Argentina..
    </p>
      <div className="relative w-full max-w-11/12 max-sm:max-w-full  mx-auto overflow-hidden">
        {/* Fade lateral */}
        <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
          
        </div>

        {/* Carrusel */}
        <Marquee autoFill={true} speed={80} gradient={false}>
          {['2-2', '2-1' , '2-3' , '2-4' ].map((num) => (
            <img
              key={num}
              src={`/../${num}.jpg`} 
              alt={`Logo ${num}`}
              className="h-24 pr-10 cursor-pointer  md:pr-30 grayscale-0 hover:grayscale transition duration-300 ease-in-out"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Alianza;