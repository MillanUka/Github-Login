import React, { Component } from "react";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container-sm border" style={{textAlign: "center", maxWidth : "25%"}}>
        <form>
          <h2 className="display-5 text-dark">Login</h2>
          <div className="container-sm" style={{textAlign: "left"}}>
            <div className="form-group">
              <label for="usernameInput"><h5 className="text-dark">Username</h5></label>
              <input type="text" className="form-control border border-dark" placeholder="" id="usernameInput"></input>
              <label for="passwordInput"><h5 className="text-dark">Password</h5></label>
              <input type="password" className="form-control border border-dark" placeholder="" id="passwordInput"></input>
            </div>
          </div>
        </form>
        <button className="btn bg-success text-white"><h3>Login</h3></button>
        <hr className="bg-success"></hr>
      </div>
    )
  }
}

export default LoginComponent;
