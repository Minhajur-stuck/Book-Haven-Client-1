import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { Link } from "react-router";

const MyBook = () => {
  const { user } = use(AuthContext);
  const [myBooks, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/myBooks/?email=${user.email}`)
      .then((data) => {
        setBooks(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  const handleUpdate= ()=>{

  }

  const handleDelete = ()=>{

  }
  return (
    <div>
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
          {myBooks.map((book, index) => (
            <tr key={book._id}>
              <th>{index + 1}</th>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.rating}</td>
              <td>
                <Link to={`/updateBook/${book._id}`} className="btn">Update</Link>
                <button onClick={handleDelete} className="btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBook;
