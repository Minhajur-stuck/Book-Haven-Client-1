import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const UpdateBook = () => {
  const { user } = use(AuthContext);
  const data = useLoaderData();
  const book = data.data;
  console.log(book);

  const handleUpdate = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    const genre = e.target.genre.value;
    const rating = e.target.rating.value;
    const summary = e.target.summary.value;
    const image = e.target.image.value;
    const userEmail = e.target.email.value;
    const userName = e.target.name.value;

    console.log(
      title,
      author,
      genre,
      rating,
      summary,
      image,
      userEmail,
      userName
    );
  };
  return (
    <div>
      <div className="card   mx-auto shadow-2xl shadow-blue-400  w-[800px] mt-5 mb-5">
        <div className="card-body ">
          <h1 className="text-5xl font-bold ">Update Book</h1>
          <form onSubmit={handleUpdate} className="fieldset grid grid-cols-2">
            <div className="flex flex-col">
              <label className="label">Title</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Title"
                name="title"
                defaultValue={book.title}
              />
            </div>
            <div className="flex flex-col">
              <label className="label">Author</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Author"
                name="author"
                defaultValue={book.author}
              />
            </div>
            <div className="flex flex-col">
              <label className="label">Genre</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Genre"
                name="genre"
                defaultValue={book.genre}
              />
            </div>
            <div className="flex flex-col">
              <label className="label">Rating</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Rating"
                name="rating"
                defaultValue={book.rating}
              />
            </div>

            <div className="flex flex-col">
              <label className="label">CoverImage</label>
              <input
                type="text"
                className="input w-full"
                placeholder="coverImage"
                name="image"
                defaultValue={book.image}
              />
            </div>
            <div className="flex flex-col">
              <label className="label">User Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="User-Email"
                name="email"
                defaultValue={book.userEmail}
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label className="label">User Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="User-Name"
                name="name"
                defaultValue={book.userName}
              />
            </div>
            <div className="flex flex-col col-span-2 ">
              <label className="label">Summary</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Summary"
                name="summary"
                defaultValue={book.summary}
              />
            </div>

            <button
              
              className="btn btn-neutral mt-4 col-span-2"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
