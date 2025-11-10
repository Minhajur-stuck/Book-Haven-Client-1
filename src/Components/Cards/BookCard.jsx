import React from "react";

const BookCard = ({book}) => {
  console.log(book)
  const {title, author, image} = book;
  return (
    <div className="card bg-base-100 w-96 shadow-sm border m-10">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body px-10">
        <h2 className="card-title">{title}</h2>
        <p>Author: {author}</p>
        <div className="card-actions">
          <button className="btn">Details</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
