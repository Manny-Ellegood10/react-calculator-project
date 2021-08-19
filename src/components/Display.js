import React, { Component } from "react";
import "./display.css";

class Display extends Component {

  render() {
    return (
      <div id="display" className="screen">
        {this.props.display}
      </div>
    );
  }
}

export default Display;