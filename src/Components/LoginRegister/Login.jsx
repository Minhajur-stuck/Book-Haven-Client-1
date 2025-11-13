import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const { signInGoogle, signInwithEmail } = use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    signInwithEmail(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate(location.state || "/");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  const handleGoogle = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);

        navigate(location.state || "/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="mt-10 ">
      <div className="flex items-center justify-center ">
        <div className=" p-8 rounded-lg shadow-lg  max-w-md   shadow-indigo-500  sm:w-[400px]">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-600">L o g i n</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border-2 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                name="email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 font-semibold text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border-2 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                name="password"
              />
            </div>
            <div className="text-left">
               <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full  hover:opacity-90 mr-2 rounded-4xl  border-0 text-white bg-indigo-600  py-2 rounded-2xl cursor-pointer transition font-semibold"
            >
              Login
            </button>
          </form>
          <p className="text-red-500 font-semibold text-center">{error}</p>
         

          <button
            onClick={handleGoogle}
            className=" mt-5  mb-4 w-full  hover:opacity-90 mr-2 rounded-4xl  text-black bg-white font-semibold  py-2  cursor-pointer transition border-2 border-gray-500"
          >
            Login with Google
          </button>
          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-sky-300 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
