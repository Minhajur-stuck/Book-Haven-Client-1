import { motion } from "framer-motion";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="border text-center  px-20 py-5  flex items-center justify-between overflow-hidden">
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
          className="text-xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {" "}
          Explore, Add, and Manage your favorite books easily!
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
