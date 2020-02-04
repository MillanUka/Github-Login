import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <div className="container-fluid bg-dark" style={{textAlign : "center", height: "25%"}}>
        <h1 className="display-5 text-white">Github Login</h1>
      </div>
    )
  }
}

export default HeaderComponent;
