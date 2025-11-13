import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Spinner from "../Spinner/Spinner";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { AiTwotoneStar } from "react-icons/ai";

const BookDetails = () => {
  const book = useLoaderData();
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(true);
  const [cmnt, setCmnt] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    axios
      .get("https://bookhaven-server-two.vercel.app/get-comment")
      .then((data) => {
        setCmnt(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(book.data);
  const { title, author, coverImage, genre, rating, summary, userEmail } =
    book.data;

  if (loading) {
    return <Spinner></Spinner>;
  }

  const handleComment = (e) => {
    e.preventDefault();
    console.log("comment click");
    const comment = e.target.textarea.value;
    const reqBody = {
      userName: user.displayName,
      photoUrl: user.photoURL,
      comment,
    };
    console.log(comment);

    axios
      .post("https://bookhaven-server-two.vercel.app/comment", reqBody)
      .then((data) => {
        console.log(data.data);
        reqBody._id = data.data.insertedId;
        console.log(reqBody);
        const newArr = [...cmnt, reqBody];

        setCmnt(newArr);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //delete funciton
  return (
    <div className="m-5">
      <div className="flex md:justify-center flex-col md:flex-row  md:w-[800px] mx-auto m-10">
        <div className="md:w-[50%] mb-15 md:mb-0">
          <img
            className=" h-[500px] mx-auto md:w-[90%] rounded-2xl  shadow-lg  shadow-indigo-500"
            src={coverImage}
            alt=""
          />
        </div>
        <div className="md:w-[50%] md:pr-20 space-y-2  ">
         <div className="flex items-center">
           <AiTwotoneStar />
          <p> {rating}</p>

         </div>
          <h1 className="font-semibold text-3xl hover:text-green-700">
            {title}
          </h1>
          <p className="font-semibold text-gray-500 hover:text-blue-400 text-[16px] text-sm">
            {author}
          </p>
          <p className="font-semibold text-gray-500 text-[14px]">{genre}</p>
          <p className="mt-5 text-xl">{summary}</p>
          <p className="text-gray-500 text-[14px]">{userEmail}</p>
        </div>
      </div>
      <div className="">
        {cmnt.map((item) => (
          <div
            key={item._id}
            className="card  md:w-[60%] md:h-[100px] mt-4 mx-auto border-2 border-gray-500 bg-base-100 card-sm shadow-sm rounded-4xl"
          >
            <div className="card-body flex-row justify-between items-center">
              <div>
                <div className="flex items-center gap-2">
                  <img
                    className="w-10 h-10 border-2 border-gray-500 rounded-4xl"
                    src={user.photoURL}
                    alt=""
                  />
                  <p className="font-semibold text-[16px] text-gray-600">
                    {user.displayName}
                  </p>
                </div>
                <p className="text-[16px] text-gray-700  px-13">
                  {item.comment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleComment}>
        <div class="md:w-[60%] mx-auto mt-4 mb-4 border-2 border-gray-500 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label for="comment" class="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="4"
              class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a comment..."
              required
              name="textarea"
            ></textarea>
          </div>
          <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600 border-gray-200">
            <button
              type="submit"
              class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Post comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookDetails;
