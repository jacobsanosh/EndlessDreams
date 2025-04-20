import Marquee from "react-fast-marquee";

const Testimonial = () => {
  return (
    <div className="w-4/5 flex flex-col m-auto mt-10 gap-10 mb-10 text-black">
      <div className="w-full flex flex-col gap-2">
        <p className="text-6xl font-medium text-center">Clients Testimonials</p>
        <p className="text-center text-2xl">
          Read what our clients have to say about their experience with Endless
          Dreams Builders & Developers.
        </p>
      </div>
      <div className="w-full text-xl">
        <Marquee
          direction="left"
          speed={50}
          pauseOnHover={true}
          className="p-5"
        >
          <div className="text-sm w-[15rem] h-[15rem] sm:w-[16rem] sm:h-[16rem] md:w-[20rem] md:h-[20rem] rounded-2xl overflow-hidden shadow-xl p-8 flex justify-center items-center mx-8">
            "Endless Dreams Builders & Developers exceeded our expectations with
            their impeccable craftsmanship and commitment to delivering on
            time."
          </div>
          <div className="text-sm w-[15rem] h-[15rem] sm:w-[16rem] sm:h-[16rem] md:w-[20rem] md:h-[20rem] rounded-2xl overflow-hidden shadow-xl p-8 flex justify-center items-center mx-8">
            "Working with the Endless Dreams team was a pleasure as they brought
            our vision to life with exceptional attention to detail and
            professionalism."
          </div>
          <div className="text-sm w-[15rem] h-[15rem] sm:w-[16rem] sm:h-[16rem] md:w-[20rem] md:h-[20rem] rounded-2xl overflow-hidden shadow-xl p-8 flex justify-center items-center mx-8">
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
