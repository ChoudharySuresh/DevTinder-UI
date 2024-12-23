import Main from "../../assets/Main.png";
import Vector from "../../assets/Logo/Vector.png";

const Home = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Main})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 md:px-8">
          <div className="flex flex-row items-center gap-4 mb-4">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white">
              Swipe Right
            </h2>
            <img src={Vector} alt="vector" className="w-10 md:w-14 lg:w-24" />
          </div>
          <button className="bg-gradient-to-r from-[#FD2B74] to-[#FE5C3A] text-white font-semibold px-6 py-3 rounded-full text-sm md:text-base lg:text-lg">
            Create account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
