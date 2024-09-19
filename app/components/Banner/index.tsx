import Image from "next/image";

const Banner = () => {
  return (
    <div id="home-section" className="bg-slate-700 text-white">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-evenly">
            <div className="flex gap-2 mx-auto lg:mx-0">
              <Image
                src="/assets/banner/check.svg"
                alt="check-image"
                width={20}
                height={20}
              />
              <h3 className="text-teal-300 text-sm font-semibold text-center lg:text-start">
                Obtené un 10% de descuento ahora!
              </h3>
            </div>
            <h1 className="text-white text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
              ¿Buscás impulsar tu empresa con tecnología innovadora y mantener
              la elegancia?
            </h1>
            <h3 className="text-gray-400 text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0">
              Cambiemos el rumbo de tu negocio, llevándolo{" "}
              <span className="text-cornflowerblue">a otro nivel.</span>
            </h3>

            <div className="text-white focus-within:text-white flex flex-row-reverse input-shadow rounded-full pt-5 lg:pt-0">
    <button
      type="button"
      className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-teal-500 hover:bg-teal-400 duration-150 ease-in-out rounded-full"
    >
      Contactarse
    </button>
</div>
          </div>

          <div className="col-span-6 flex justify-center">
            <Image
              src="/assets/banner/TC.png"
              alt="nothing"
              width={505}
              height={505}
            />
          </div>
        </div>
          <div className="flex items-center justify-between pt-20 w-full lg:pt-4">
            <div className="flex gap-2">
              <Image
                src="/assets/banner/check-circle.svg"
                alt="check-image"
                width={30}
                height={30}
                className="smallImage"
              />
              <p className="text-sm sm:text-lg font-normal text-gray-200">
                +2 años de experiencia
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/assets/banner/check-circle.svg"
                alt="check-image"
                width={30}
                height={30}
                className="smallImage"
              />
              <p className="text-sm sm:text-lg font-normal text-gray-200">
                Cobertura a nivel mundial
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/assets/banner/check-circle.svg"
                alt="check-image"
                width={30}
                height={30}
                className="smallImage"
              />
              <p className="text-sm sm:text-lg font-normal text-gray-200">
                +40% de productividad
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Banner;
