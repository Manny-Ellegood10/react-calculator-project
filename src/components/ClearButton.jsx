import React from "react";
// import "./ClearButton.css";

// props.children will get the value passed inside button component in App.js
//
export const ClearButton = props => (
  <div className="clear-btn" onClick={props.handleClear}> 
    {props.children}
  </div>
);