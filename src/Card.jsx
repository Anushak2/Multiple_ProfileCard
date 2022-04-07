import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card">
        <img className="image" src={props.image} alt="not found" />
        <h2 className="name"> {props.name} </h2>
        <h4 className="title"> {props.jobname} </h4>
        <p className="location">{props.location} </p>
        <button className="btn">{props.button} Contact me </button>
      </div>
      <hr />
    </div>
  );
}
export default Card;
