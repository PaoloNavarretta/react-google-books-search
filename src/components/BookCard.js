import React from "react";

const BookCard = props => {
  return (
    <div className="book">
      <div className="book__text">
        <h5 className="book__title">{props.title}</h5>
        <p className="book__author">Author: {props.author}</p>
        <p className="book__date">
          Published Date:{" "}
          {props.published === "0000"
            ? "Not Available"
            : props.published.substring(0, 4)}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
