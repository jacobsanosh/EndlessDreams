import about3 from "../../../public/images/about-3.jpg";

const Services = () => {
  return (
    <div id="services" className="w-full justify-center items-center m-auto">
      <div className="flex flex-col-reverse sm:flex-row  w-4/5 gap-10 m-auto mb-5 text-black sm:items-center items-start">
        <div className="w-full sm:w-1/2 flex flex-col gap-4 justify-center">
          <p className="font-medium text-4xl md:text-6xl">
            Endless Possibilities
          </p>
          <p className="text-black text-base md:text-xl">
            Our passion and commitment to excellence drive us to create
            exceptional space that reflect the unique vision and aspirations of
            our clients.
          </p>
          <div className="flex flex-col gap-1 ml-5">
            <p className="text-black text-base md:text-xl">
              Luxury Residential Projects
            </p>
            <p className="text-black text-base md:text-xl">
              Commercial Projects
            </p>
            <p className="text-black text-base md:text-xl">
              Modern Renovations
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 rounded-2xl overflow-hidden">
          <img src={about3} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Services;
