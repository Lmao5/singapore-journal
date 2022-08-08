import React from "react";
import merlion from "../images/merlion.jpg";
import { GeoAlt } from 'react-bootstrap-icons';
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <img src={merlion} className="card-image" />
      <div className="card-body">
        <span className="card-location">
          <GeoAlt/> Merlion Park, Singapore &nbsp;
          <a href="https://www.google.com/maps/place/Merlion/@1.2867892,103.8525161,816m/data=!3m1!1e3!4m5!3m4!1s0x31da19085926dadb:0x9f427391c9f64c38!8m2!3d1.2867892!4d103.8545014"
            className="card-map-link"
            target={"_blank"}>
            View on Google Maps
          </a>
        </span>
        <h1 className="card-title">Merlion</h1>
        <h4 className="visit-date">Visited on: 07 August 2022</h4>
        <p className="card-description">
          The Merlion statue is the national icon of Singapore. Located near the
          mouth of the Singapore River, the half-lion and half-fish icon spews
          water out from its mouth. Here, many tourists are found doing funny
          poses in front of the statue.
        </p>
      </div>
    </div>
  );
}

export default Card;
