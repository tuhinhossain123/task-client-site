import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { singIn, singInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);
    singIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      toast("login successfully");
      navigate("/dashboard");
    });
  };
  const handleWithGoogle = () => {
    singInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="bg-black">
      <div className="w-full md:w-[40%] mx-auto">
        <div className="hero-content flex-col ">
          <div className=""></div>
          <div className=" w-full shadow-2xl rounded-lg bg-[#02a388]">
            <h1 className="text-4xl font-semibold text-white pl-10 pt-10">
              Sign in
            </h1>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="">
                  <button
                    onClick={handleWithGoogle}
                    className="border-2 text-white rounded-full  font-semibold py-2 px-2 w-full flex items-center justify-center"
                  >
                    <FcGoogle className="text-xl mr-3"></FcGoogle>Sign in with
                    Google
                  </button>
                  <ToastContainer />
                </div>
                <div className="divider divider-neutral text-white mb-5">
                  OR
                </div>
                <div className="form-control  ">
                  <label className="label">
                    <span className="label-text text-white text-lg">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input text-black bg-white input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-lg">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input text-black bg-white input-bordered"
                    required
                  />
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt link link-hover text-lg text-white"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-3">
                  <button className="py-2 px-2 font-semibold rounded-full text-lg bg-black text-white">
                    Sign in
                  </button>
                  <ToastContainer />
                </div>
              </form>

              <p className="font-semibold text-center">
                <span className="text-white"> Don't have an account? </span>
                <Link to="/register" className="text-black underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
