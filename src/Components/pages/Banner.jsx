import { motion } from "framer-motion";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="border text-center  px-20 py-5  flex items-center justify-between overflow-hidden mb-25">
      <div className="space-y-5">
        <motion.h1
          className="text-5xl "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Digital Library
        </motion.h1>
        <motion.h2
          className="text-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {" "}
         <span className="text-orange-400">Explore</span>  _ <span className="text-sky-400">Read</span> _ <span className="text-green-900">Add</span> _ <span className="text-yellow-600">Manage</span> 
        </motion.h2>
        <div className="flex items-center justify-center gap-5">
          <Link to='/allBooks' className="btn">All Books</Link>
          <Link to='/addBook' className="btn">Create Book</Link>
        </div>
      </div>
      <div>
        <motion.img
          className="w-100"
          initial={{ opacity: 0, y: -100 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          src="https://i.ibb.co.com/rK1PVkPT/books-8770939-1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
