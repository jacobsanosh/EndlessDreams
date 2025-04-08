import about1 from "../../../public/images/about-1.jpg";
import about2 from "../../../public/images/about-2.jpg";
import about3 from "../../../public/images/about-3.jpg";
const About = () => {
  return (
    <div className="w-full min-h-screen bg-white text-red-300 flex md:flex-row justify-between items-center mt-8 p-20">
      <div className="w-1/2 flex gap-3">
        <div className="flex flex-col gap-3">
          <div className="h-[400px] w-[400px] rounded-2xl overflow-hidden">
            <img src={about1} className="w-full h-full object-cover" />
          </div>
          <div className="h-[400px] w-[400px] rounded-2xl overflow-hidden">
            <img src={about2} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="h-full w-[400px] rounded-2xl overflow-hidden">
            <img src={about3} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center text-left pl-10 gap-3">
        <p className="font-medium text-6xl uppercase">About Us</p>
        <p className="text-6xl text-black capitalize">
          Turning Dreams into reality
        </p>
        <p className="text-black text-xl">
          Our passion and commitment to excellence drive us to create
          exceptional space that reflect thenunique vision and aspirations of
          our clients
        </p>
      </div>
    </div>
  );
};

export default About;
