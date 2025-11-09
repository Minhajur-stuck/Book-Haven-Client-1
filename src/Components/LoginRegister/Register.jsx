import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {
  const {user, createUser, signInGoogle} = use(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photo.value;
    const password = e.target.password.value;

    console.log(name, email, password, photoUrl)

    createUser(email, password)
    .then(result =>{
      console.log(result.user)
      alert('registation successful')
      e.target.reset()
    })
   .catch(err => {
    console.log(err.message)
   })
    
  };

  const handleGoogle= ()=>{
    signInGoogle()
    .then(result =>{
      console.log(result.user)
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="email"
            />
          </div>
          <div>
            <label htmlFor="photo" className="block mb-1 font-medium">
              Photo URL
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-500">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <button
          onClick={handleGoogle}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition mb-4"
        >
          Register with Google
        </button>

        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
