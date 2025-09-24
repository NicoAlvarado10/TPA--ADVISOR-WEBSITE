import Marquee from "react-fast-marquee";

const Carrusel = () => {
  return (
    <section className="py-20 bg-[#fffefe] flex flex-col items-center w-full overflow-x-hidden ">
      <h2 className="p-5 text-5xl pb-20 text-center  2xl:max-w-[40%]">
        Multinacionales que  confian en{" "}
        <span className="underline decoration-[#1447E6] ">nosotros</span> 
      </h2>

      <div className="relative w-full max-w-11/12 max-sm:max-w-full  mx-auto overflow-hidden">
        {/* Fade lateral */}
        <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
          
        </div>

        {/* Carrusel */}
        <Marquee autoFill={true} speed={80} gradient={false}>
          {[1, 2 , 3 , 4 , 5, 6].map((num) => (
            <img
              key={num}
              src={`/../${num}.png`} 
              alt={`Logo ${num}`}
              className="h-30 pr-10 cursor-pointer md:pr-30 grayscale-0 hover:grayscale transition duration-300 ease-in-out"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Carrusel;