import React from "react";
// import "../src/App.css";

export const Description = (props) => {
  return ( 
    <p className="decription">
      {/* Lista de regalos para el grupo crew */}  {props.innertext}
    </p>
  )
};
