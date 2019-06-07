import React from "react";
import AdForm from "./AdForm";
import "./AdDetails.css";

export default function AdDetails(props) {
  return (
    <div className="AdDetailsContainer">
      {props.ad && !props.editMode && (
        <div className="AdDetails">
          <h2>{props.ad.title} </h2>
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
  
    </div>
  );
}
