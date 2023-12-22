// import { useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import banner from "../../assets/Home.png";
const Banner = () => {
  return (
    <div
      className="h-[90vh] w-full flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.2)),url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="px-2 space-y-4 py-10">
        <div className="flex justify-center">
          <Link to="/login" className="text-center p-3 rounded text-xl bg-[#02a388] border-none text-white">
          Let’s Explore
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Banner;