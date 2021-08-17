import React from "react";
import "./Button.css";

// will determine if operator or not
// pass the val 
const isOperator = val => {
    // if its not a and NAN = a number. isNAN must have a number passed returns bool
    if(!isNaN(val) || val === "." || val === "="){
    return true;
    }
};

// props
export const Button = props => (
  <div
  // props.children renders the tag it is in and then what is inside of that. ex. 1,2,3 buttons.
    className={`button-wrapper 
    ${isOperator(props.children) ? null : "operator"}` // if input value is an operator, it will show up as a different color
            }
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);