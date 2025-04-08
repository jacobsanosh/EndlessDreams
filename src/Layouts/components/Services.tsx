import about3 from "../../../public/images/about-3.jpg";

const Services = () => {
  return (
    <div className="flex w-4/5 m-auto justify-between mb-5 text-black">
      <div className="w-1/2 flex flex-col text-2xl gap-4 justify-center">
        <p className="text-6xl font-medium">Endless Possibilities</p>
        <p>
          Our passion and commitment to excellence drive us to create
          exceptional spaces that reflect the unique vision and aspirations of
          our clients.
        </p>
        <div className="flex flex-col gap-1 ml-5">
          <p>Luxury Residential Projects</p>
          <p>Commercial Projects</p>
          <p>Modern Renovations</p>
        </div>
      </div>
      <div className="w-1/2 h-[600px] rounded-2xl overflow-hidden">
        <img src={about3} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Services;
