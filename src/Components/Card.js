import React from "react";
import { GeoAlt } from 'react-bootstrap-icons';
import "./Card.css";

function Card({item}) {
  return (
    <div className="card">
      <img src={item.image} className="card-image" alt={item.image_alt}/>
      <div className="card-body">
        <span className="card-location">
          <GeoAlt/> {item.location} &nbsp;
          <a href={item.gmaps_link}
            className="card-map-link"
            target={"_blank"}
            rel="noreferrer">
            View on Google Maps
          </a>
        </span>
        <h1 className="card-title">{item.title}</h1>
        <h4 className="visit-date">Visited on: {item.visit_date}</h4>
        <p className="card-description">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
