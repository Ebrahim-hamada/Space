import useResponsiveBackground from "../../hooks/UseResponsiveBackground";
import desktopBackground from "../../assets/image/home/background-home-desktop.jpg";
import tabletBackground from "../../assets/image/home/background-home-tablet.jpg";
import mobileBackground from "../../assets/image/home/background-home-mobile.jpg";
import PageTransition from "../../Components/PageTransition/PageTransition";

const Home = () => {
  const backgroundImage = useResponsiveBackground(
    desktopBackground,
    tabletBackground,
    mobileBackground
  );

  return (
    <PageTransition>
      <div
        className="min-h-screen text-center lg:text-start text-white bg-cover bg-center bg-no-repeat overflow-x-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="w-[90%] mx-auto px-6 pt-32 md:pt-70 lg:pt-90 pb-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
            <div className="text-center w-full lg:text-left max-w-md lg:max-w-xl">
              <h2 className="text-lg md:text-xl uppercase tracking-widest text-blue-100 mb-4">
                So, you want to travel to
              </h2>
              <h1 className="text-7xl md:text-8xl lg:text-9xl text-white mb-6">
                SPACE
              </h1>
              <p className="w-[90%] mx-auto md:w-full text-base md:text-lg text-blue-100 leading-relaxed">
                Let's face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we'll give you a truly out
                of this world experience!
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <button className="relative z-10 bg-white text-black text-xl px-10 py-10 rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center uppercase tracking-widest transition-all duration-300 hover:text-gray-400">
                  Explore
                </button>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full p-30 md:p-38 lg:p-45 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
