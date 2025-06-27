import React from "react";

export default function Vijay(prop) {
  return (
    <div className="cont">
      <img src={prop.DPimg} alt="" />
      <div className="text">
        <h3>{prop.Name}</h3>
        <h4>No Of Movies Acted: {prop.NoOfMoviesActed}</h4>
        <p>{prop.About}</p>
      </div>
    </div>
  );
}
