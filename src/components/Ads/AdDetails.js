import React from "react";
import AdForm from "./AdForm";
import { Link } from "react-router-dom";
import "./AdDetails.css";

export default function AdDetails(props) {
  console.log("PROPSSSS", props.ad);
  return (
    <div className="AdDetailsContainer">
      {props.ad && !props.editMode && (
        <div className="AdDetails">
          <h1>{props.ad.title} </h1>
          <img className="AdImages" src={props.ad.picture} alt={props.ad.description} />
          <p>Description: {props.ad.description} </p>
          <p>Price: $ {props.ad.price} </p>
          <p>Email: {props.ad.email} </p>
          <p>Phone: {props.ad.phone} </p>
          <br />
          <button className="AdDetailsButtons" onClick={props.onEdit}>
            Edit
          </button>
        </div>
      )}
      {props.editMode && (
        <div className="AdForm">
          <AdForm
            adDetails={props.adDetails}
            values={props.formValues}
            onChange={props.onChange}
            onSubmit={props.onSubmit}
          />
        </div>
      )}
      <Link to="/">
        <button className="AdDetailsButtons">Home</button>
      </Link>
    </div>
  );
}
