import React, { Component } from "react";
import { connect } from "react-redux";
import { updateDisplay } from "../actions/actions";
import { clearDisplay } from "../actions/actions";
import { subtraction } from "../actions/actions";
import { multiplication } from "../actions/actions";
import { division } from "../actions/actions";
import "./Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClicks = this.handleClicks.bind(this);
  }
  // for each click, corresponding action will occur. 
  handleClicks(e) {
    if (this.props.id === "clear") {
      this.props.clear();
    } else if (this.props.id === "subtract") {
      this.props.subtract(this.props.display);
    } else if (this.props.id === "multiply") {
      this.props.multiply(this.props.display);
    } else if (this.props.id === "divide") {
      this.props.divide(this.props.display);
    } else {
      this.props.updateDisplay(this.props.button);
    }
  }

  render() {
    return (
      <button
        id={this.props.id}
        value={this.props.value}
        className="button"
        onClick={this.handleClicks}
      >
        {this.props.button}
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateDisplay: display => dispatch(updateDisplay(display)),
  subtract: display => dispatch(subtraction(display)),
  multiply: display => dispatch(multiplication(display)),
  divide: display => dispatch(division(display)),
  clear: display => dispatch(clearDisplay(display))
});



export default connect(
  null,
  mapDispatchToProps
)(Button);






// // will determine if operator or not
// // pass the val 
// const isOperator = val => {
//     // if its not a and NAN = a number. isNAN must have a number passed returns bool
//     if(!isNaN(val) || val === "." || val === "="){
//     return true;
//     }
// };

// // props
// export const Button = props => (
//   <div
//   // props.children renders the tag it is in and then what is inside of that. ex. 1,2,3 buttons.
//     className={`button-wrapper 
//     ${isOperator(props.children) ? null : "operator"}` // if value is an operator, it will show up as a different color
//             }
//     onClick={() => props.handleClick(props.children)}
//   >
//     {props.children}
//   </div>
// );