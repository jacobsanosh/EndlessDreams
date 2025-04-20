import about1 from "../../../public/images/about-1.jpg";
import about2 from "../../../public/images/about-2.jpg";
import about3 from "../../../public/images/about-3.jpg";
const About = () => {
  return (
    <div
      id="about"
      className="gap-5 w-full flex flex-col justify-center items-center md:h-max bg-white text-red-300 sm:flex sm:flex-row sm:justify-between sm:items-center lg:mt-8 lg:p-20  md:mt-3 md:p-10 sm:mt-2 p-5 sm:gap-2"
    >
      <div className="w-full sm:w-1/2 flex gap-3 sm:justify-start justify-center">
        <div className="w-full flex flex-col gap-3 items-center sm:items-start">
          <div className="hidden w-full sm:block sm:h-[150px]  md:h-[200px] lg:h-[250px] xl:h-[350px] xl:w-[350px] 2xl:h-[400px] 2xl:w-[400px] rounded-2xl overflow-hidden">
            <img src={about1} className="w-full h-full object-cover" />
          </div>
          <div className="w-full sm:block sm:h-[150px]  md:h-[200px] lg:h-[250px] xl:h-[350px] xl:w-[350px] 2xl:h-[400px] 2xl:w-[400px] rounded-2xl overflow-hidden">
            <img src={about2} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="hidden sm:block w-1/2">
          <div className="h-full md:w-[150px] lg:w-[200px] xl:w-[300px] 2xl:w-[400px] rounded-2xl overflow-hidden">
            <img src={about3} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="sm:w-1/2 flex flex-col justify-start text-left pl-10 gap-3">
        <p className="text-4xl font-medium  md:text-6xl uppercase">About Us</p>
        <p className="text-3xl md:tesxt-4xl text-black capitalize">
          Turning Dreams into reality
        </p>
        <p className="text-black text-base md:text-xl">
          Our passion and commitment to excellence drive us to create
          exceptional space that reflect thenunique vision and aspirations of
          our clients
        </p>
      </div>
    </div>
  );
};

export default About;
