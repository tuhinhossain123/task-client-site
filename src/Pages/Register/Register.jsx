import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };
  return (
    <div className="bg-black">
      <div className="w-full md:w-[40%] mx-auto">
        <div className="hero-content flex-col ">
          <div className=""></div>
          <div className=" w-full shadow-2xl rounded-lg bg-[#02a388]">
            <h1 className="text-4xl font-semibold text-white pl-10 pt-10">
              Sign up
            </h1>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control  ">
                  <label className="label">
                    <span className="label-text text-white text-lg">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    {...register("name", { required: true })}
                    className="input text-black bg-white input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600 text-xl">
                      name is required
                    </span>
                  )}
                </div>
                <div className="form-control  ">
                  <label className="label">
                    <span className="label-text text-white text-lg">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    {...register("email", { required: true })}
                    className="input text-black bg-white input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600 text-xl">
                      email is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-lg">
                      img url
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="url"
                    name="img"
                    {...register("img", { required: true })}
                    className="input text-black bg-white input-bordered"
                  />
                  {errors.imgUrl && (
                    <span className="text-red-600 text-xl">
                      img is required
                    </span>
                  )}
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
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    })}
                    className="input text-black bg-white input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600 text-xl">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600 text-xl">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600 text-xl">
                      Password must have one Capital letter, one number and one
                      special character.
                    </p>
                  )}
                </div>
                <div className="form-control mt-8">
                  <button className="py-2 px-2 font-semibold rounded-full text-lg bg-black text-white">
                    Sign up
                  </button>
                </div>
              </form>

              <p className="font-semibold text-center">
                <span className="text-white"> Already have an account? </span>
                <Link to="/login" className="text-black underline">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
