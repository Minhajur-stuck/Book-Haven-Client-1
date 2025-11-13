import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "../Cards/BookCard";

const LatestBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://bookhaven-server-two.vercel.app/latest-books")
      .then((data) => {
        setBooks(data.data);
      });
  }, []);
  return (
    <div className="mb-25 w-11/12 mx-auto">
      <h1 className="text-center text-4xl">Latest Books_</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 md:p-13 md:mt-7 mt-20  sm:pl-7 md:pl-0">
        {books.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default LatestBook;
