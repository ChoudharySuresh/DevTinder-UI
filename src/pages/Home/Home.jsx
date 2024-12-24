import Main from "../../assets/Main.png";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${Main})`,
      }}
    >
      <div className="pt-56">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">Swap Right</h1>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="bg-gradient-to-r from-[#FD2B74] to-[#FE5C3A] text-white font-semibold px-6 py-3 rounded-full text-sm md:text-base lg:text-lg"
            >
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
