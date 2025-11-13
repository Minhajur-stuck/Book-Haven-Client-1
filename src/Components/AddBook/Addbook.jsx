import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

// ● Title
// ● Author
// ● Genre

// ● Rating
// ● Summary
// ● coverImage
// ● User Email (who added this plant generally added user),
// ● User Name (who added this plant generally added user).
const Addbook = () => {
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    const genre = e.target.genre.value;
    const rating = e.target.rating.value;
    const summary = e.target.summary.value;
    const coverImage = e.target.image.value;
    const userEmail = e.target.email.value;
    const userName = e.target.name.value;

    const bookInfo = {
      title,
      author,
      genre,
      rating,
      summary,
      coverImage,
      userEmail,
      userName,
    };
    console.log(bookInfo);

    axios
      .post(`https://bookhaven-server-two.vercel.app/add-book`, bookInfo, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Book added");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went wrong!");
      });
  };
  return (
    <div className="mt-20">
      <div className="card   mx-auto shadow-lg  shadow-indigo-500  md:w-[800px] mt-5 mb-5">
        <div className="card-body ">
          <div className="text-3xl text-gray-600 font-bold flex items-center gap-2">Add Book <img className="w-10" src="https://i.ibb.co.com/KxHLwfcV/book.png" alt="" />  </div>
          <form onSubmit={handleSubmit} className="fieldset grid grid-cols-2">
            <div className="flex flex-col">
              <label className="label">Title</label>
              <input
                type="text"
                className="input w-full dark:bg-black"
                placeholder="Title"
                name="title"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="label">Author</label>
              <input
                type="text"
                className="input w-full dark:bg-black"
                placeholder="Author"
                name="author"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="label">Genre</label>
              <input
                type="text"
                className="input w-full dark:bg-black"
                placeholder="Genre"
                name="genre"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="label">Rating</label>
              <input
                type="text"
                className="input w-full dark:bg-black"
                placeholder="Rating"
                name="rating"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="label">CoverImage</label>
              <input
                type="text"
                className="input w-full dark:bg-black"
                placeholder="coverImage"
                name="image"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="label">User Email</label>
              <input
                type="email"
                className="input w-full dark:bg-black"
                placeholder="User-Email"
                name="email"
                defaultValue={user.email}
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label className="label">User Name</label>
              <input
                type="text"
                className="input w-full dark:bg-black"
                placeholder="User-Name"
                name="name"
                defaultValue={user.displayName}
              />
            </div>
            <div className="flex flex-col col-span-2 ">
              <label className="label">Summary</label>
              <input
                type="text"
                className="input w-full dark:bg-black"
                placeholder="Summary"
                name="summary"
                required
              />
            </div>

            <button className="btn hover:opacity-90 mr-2 rounded-4xl  border-0 text-white bg-indigo-600 mt-4 col-span-2">Add</button>
          </form>
          <Toaster></Toaster>
        </div>
      </div>
    </div>
  );
};

export default Addbook;
