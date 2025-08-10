const LandingPage = () => {
  return (
    <div 
      className="w-full min-h-screen flex flex-col justify-center items-center text-gray-800 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/bg.jpg)',
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 sm:bg-opacity-40 transition-opacity duration-300"></div>
      
      {/* Content Container */}
      <div className="flex flex-col items-center sm:items-start w-full max-w-7xl mx-auto relative z-10 text-center sm:text-left">
        {/* Main Heading */}
        <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight tracking-tighter text-white font-bold mb-2 sm:mb-4 md:mb-6 transition-all duration-300 hover:scale-105 transform">
          EndlessDreams
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight mb-2 sm:mb-4 md:mb-6 text-mustard-500 font-semibold transition-all duration-300 hover:text-mustard-400">
          Builders & Developers
        </h2>
        
        {/* Tagline */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-200 max-w-2xl sm:max-w-3xl transition-all duration-300 hover:text-white">
          Turning dreams into reality
        </p>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-mustard-500 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full opacity-40 animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 sm:w-2 sm:h-2 bg-mustard-400 rounded-full opacity-50 animate-bounce"></div>
    </div>
  );
};

export default LandingPage;
