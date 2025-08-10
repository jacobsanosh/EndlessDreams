import about1 from "../../../public/images/about-1.jpg";
import about2 from "../../../public/images/about-2.jpg";
import about3 from "../../../public/images/about-3.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-white text-gray-700 px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {/* First Image - Visible on all screens */}
              <div className="col-span-1">
                <div className="aspect-square sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={about1} 
                    alt="About us image 1" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              </div>
              
              {/* Second Image - Hidden on mobile, visible on sm+ */}
              <div className="hidden sm:block col-span-1">
                <div className="aspect-square sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={about2} 
                    alt="About us image 2" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              </div>
              
              {/* Third Image - Hidden on mobile, visible on larger screens */}
              <div className="hidden lg:block lg:col-span-2">
                <div className="aspect-[2/1] rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={about3} 
                    alt="About us image 3" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-violet-700 leading-tight">
                About Us
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 capitalize font-medium leading-tight">
                Turning Dreams into Reality
              </h3>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Our passion and commitment to excellence drive us to create
              exceptional spaces that reflect the unique vision and aspirations of
              our clients.
            </p>
            
            {/* Additional content for larger screens */}
            <div className="hidden md:block space-y-4">
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                With years of experience and a dedicated team of professionals, 
                we transform your ideas into beautiful, functional realities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
