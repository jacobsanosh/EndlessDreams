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
      <div className="w-full flex justify-between text-xl">
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl p-8 h-[400px] flex justify-center items-center">
          "Endless Dreams Builders & Developers exceeded our expectations with
          their impeccable craftsmanship and commitment to delivering on time."
        </div>
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl p-8 h-[400px] flex justify-center items-center">
          "Working with the Endless Dreams team was a pleasure as they brought
          our vision to life with exceptional attention to detail and
          professionalism."
        </div>
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl p-8 h-[400px] flex justify-center items-center">
          "The Endless Dreams team's dedication to quality and client
          satisfaction sets them apart as a trusted partner for our construction
          projects."
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
