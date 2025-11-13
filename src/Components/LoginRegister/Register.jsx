import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {
  const [error, setError] = useState("");
  const { signInGoogle, createUser } = use(AuthContext);
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);

    const passPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passPattern.test(password)) {
      setError(
        "Password Must have an Uppercase, a Lowercase letter and  Length must be at least 6 character"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user); 
        navigate('/')

      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogle=()=>{
    signInGoogle()
    .then((result) => {
        console.log(result.user); 
        navigate('/')

      })
      .catch((err) => {
        setError(err.message);
      });
  }
  return (
    <div className="flex items-center justify-center  mt-20">
      <div className=" sm:w-[400px]  shrink-0 shadow-2xl shadow-lg rounded-lg shadow-indigo-500">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-gray-500 text-center">R e g i s t e r</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="block mb-1 text-[14px] font-semibold  text-gray-600">Name</label>
              <input
                type="text"
                className="input w-full dark:bg-black"
                placeholder="Name"
                name="name"
              />
              <label className="block mb-1 text-[14px] font-semibold text-gray-600">Email</label>
              <input
                type="email"
                className="input w-full dark:bg-black"
                placeholder="Email"
                name="email"
              />
              <label className="block mb-1 text-[14px] font-semibold text-gray-600">PhotoUrl</label>
              <input
                type="text"
                className="input w-full dark:bg-black"
                placeholder="Url"
                name="photo"
              />
              <label className="block mb-1 text-[14px] font-semibold text-gray-600">Password</label>
              <input
                type="password"
                className="input w-full dark:bg-black"
                placeholder="Password"
                name="password"
              />
              <div>
                <a className="link link-hover text-[14px]">Forgot password?</a>
              </div>
              <button className="btn btn-neutral w-full  hover:opacity-90 mr-2 rounded-4xl  border-0 text-white bg-indigo-600   py-2 rounded-2xl cursor-pointer transition font-semibold mt-2">Register</button>
            </fieldset>
          </form>
         
          <button onClick={handleGoogle} className="mt-2  mb-4 w-full  hover:opacity-90 mr-2 rounded-4xl  text-black bg-white font-semibold  py-2  cursor-pointer transition border-2 border-gray-500">Login with Google</button>
          <p className="text-red-500 font-semibold">{error}</p>

           <p className="text-center text-[14px]">
            Already have an account ! 
            <Link to="/login" className="text-sky-300 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;


