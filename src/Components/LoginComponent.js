import React, { Component } from "react";
import $ from "jquery";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HeaderComponent from "../../src/Components/HeaderComponent";
import Constants from "../../src/Constants.js"
class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container-sm border" style={{ textAlign: "center", maxWidth: "25%" }}>
        <form>
          <h2 className="display-5 text-dark">Login</h2>
          <div className="container-sm" style={{ textAlign: "left" }}>
            <div className="form-group">
              <label htmlFor="usernameInput"><h5 className="text-dark">Username</h5></label>
              <input type="text" className="form-control border border-dark" placeholder="" id="usernameInput"></input>
              <label htmlFor="passwordInput"><h5 className="text-dark">Password</h5></label>
              <input type="password" className="form-control border border-dark" placeholder="" id="passwordInput"></input>
            </div>
          </div>
        </form>
        <Router>
          <Link to="/login" className="btn bg-success text-white" onClick={this.handleLogin}><h3>Login</h3></Link>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
        <hr className="bg-success"></hr>
      </div>

    )
  }

  handleLogin() {
    var auth = btoa($("#usernameInput").val() + ":" + $("#passwordInput").val());
    $.ajax({
      type: "GET",
      headers: { Authorization: "Basic " + auth },
      url: Constants.API + "user",
      success: function (data) {
        console.log(data);
        return data;
      }
    });
  }
}

function Login() {
  return (<div className="container"></div>);
}
export default LoginComponent;
