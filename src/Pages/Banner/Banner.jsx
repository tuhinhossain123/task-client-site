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
      <div>
        <div className="mr-0 lg:mr-[700px]">
          <h2 className="text-5xl text-white font-semibold">
            Organize Your Task <br /> with Our App
          </h2>
          <div className="py-6">
            <Link
              to="/login"
              className="text-center p-2 rounded text-xl bg-[#02a388] border-none text-white"
            >
              Let’s Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
