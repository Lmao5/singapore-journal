import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <img
        src="#"
        className="card-image"
      />
      <div className="card-body">
        <h1 className="card-title">Location 1</h1>
        <h4 className="visit-date">07-08-2022</h4>
        <p className="card-description">Card Description</p>
      </div>
    </div>
  );
}

export default Card;
