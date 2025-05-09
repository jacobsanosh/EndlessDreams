const LandingPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-cover bg-center bg-[url('/images/bg.jpg')] justify-center text-white px-4">
      <div className="flex flex-col items-start w-full p1-2 sm:pl-10 md:pl-20 lg:pl-40">
        <p className="uppercase text-4xl sm:text-6xl md:text-7xl 2xl:text-9xl leading-tight tracking-tighter">
          EndlessDreams
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl leading-tight pl-1">
          Builders & Developers
        </p>
        <p className="text-lg md:text-xl leading-tight pl-1">
          Turning dreams into reality
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
