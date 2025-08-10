import Marquee from "react-fast-marquee";

const Testimonial = () => {
  return (
    <div className="w-11/12 sm:w-4/5 flex flex-col m-auto mt-6 sm:mt-10 gap-6 sm:gap-10 mb-6 sm:mb-10 text-gray-700 bg-white py-10 sm:py-20 px-4 sm:px-0">
      <div className="w-full flex flex-col gap-2 sm:gap-3">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-center text-violet-700">Clients Testimonials</p>
        <p className="text-center text-lg sm:text-xl md:text-2xl text-gray-600 px-2 sm:px-0">
          Read what our clients have to say about their experience with Endless
          Dreams Builders & Developers.
        </p>
      </div>
      <div className="w-full text-base sm:text-lg md:text-xl">
        <Marquee
          direction="left"
          speed={40}
          pauseOnHover={true}
          className="p-2 sm:p-5"
        >
          <div className="text-xs sm:text-sm w-[12rem] h-[12rem] sm:w-[15rem] sm:h-[15rem] md:w-[18rem] md:h-[18rem] lg:w-[20rem] lg:h-[20rem] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 flex justify-center items-center mx-3 sm:mx-6 md:mx-8 bg-white border-2 border-mustard-200 hover:border-mustard-400 transition-colors">
            "Endless Dreams Builders & Developers exceeded our expectations with
            their impeccable craftsmanship and commitment to delivering on
            time."
          </div>
          <div className="text-xs sm:text-sm w-[12rem] h-[12rem] sm:w-[15rem] sm:h-[15rem] md:w-[18rem] md:h-[18rem] lg:w-[20rem] lg:h-[20rem] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 flex justify-center items-center mx-3 sm:mx-6 md:mx-8 bg-white border-2 border-violet-200 hover:border-violet-400 transition-colors">
            "Working with the Endless Dreams team was a pleasure as they brought
            our vision to life with exceptional attention to detail and
            professionalism."
          </div>
          <div className="text-xs sm:text-sm w-[12rem] h-[12rem] sm:w-[15rem] sm:h-[15rem] md:w-[18rem] md:h-[18rem] lg:w-[20rem] lg:h-[20rem] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 flex justify-center items-center mx-3 sm:mx-6 md:mx-8 bg-white border-2 border-mustard-200 hover:border-mustard-400 transition-colors">
            "The Endless Dreams team's dedication to quality and client
            satisfaction sets them apart as a trusted partner for our
            construction projects."
          </div>
          <div className="text-xs sm:text-sm w-[12rem] h-[12rem] sm:w-[15rem] sm:h-[15rem] md:w-[18rem] md:h-[18rem] lg:w-[20rem] lg:h-[20rem] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 flex justify-center items-center mx-3 sm:mx-6 md:mx-8 bg-white border-2 border-violet-200 hover:border-violet-400 transition-colors">
            "The Endless Dreams team's dedication to quality and client
            satisfaction sets them apart as a trusted partner for our
            construction projects."
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
