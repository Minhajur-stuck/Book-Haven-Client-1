import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Spinner from "../Spinner/Spinner";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("http://localhost:3000/all-books").then((data) => {
      setBooks(data.data);
      console.log(data.data);
      setLoading(false)
    });
  }, []);

  if(loading){
  return <Spinner></Spinner>
  }

  //name,author,genre, rating.
  return (
    <div className="px-15 ">
      <div className=" m-6">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Rating</th>
              <th className="pl-10">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {books.map((book, index) => (
              <tr key={book._id}>
                <th>{index + 1}</th>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.rating}</td>
                <td>
                  
                  <Link to={`/bookDetails/${book._id}`} className="btn">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooks;
