import React from "react";
import "./eventCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const eventCard = (props) => (
  <div className="Card" style={{ backgroundColor: props.color }}>
    <h1>{props.title}</h1>
    <p>
      <FontAwesomeIcon className="eventInfo" icon={faArrowRight} />
      {props.text}
    </p>
  </div>
);

export default eventCard;
