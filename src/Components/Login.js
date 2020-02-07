import React, { Component } from "react";
import $ from "jquery";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
import UserProfileComponent from "./UserProfile.js";
import Constants from "../Constants.js";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
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
          <Link to="/login" className="btn bg-success text-white" onClick={handleLogin}><h3>Login</h3></Link>
        </Router>
        <hr className="bg-success"></hr>
      </div>

    )
  }
}

function handleLogin() {
  var auth = btoa($("#usernameInput").val() + ":" + $("#passwordInput").val());
  $.ajax({
    type: "GET",
    headers: { Authorization: "Basic " + auth },
    url: Constants.API + "user",
    async: false, 
    success: function (data) {
      ReactDOM.render((
        <Router>
          <Route path="/user" />
          <UserProfileComponent data={data} auth={auth}/>
        </Router>
      ), document.getElementById('root'));
      console.log(data);
    },
    error: function() {
      $("#usernameInput").removeClass("form-control border border-dark");
      $("#usernameInput").addClass("form-control border border-danger");
      $("#passwordInput").removeClass("form-control border border-dark");
      $("#passwordInput").addClass("form-control border border-danger");
      alert("Your Login credentials are incorrect!");
    }

  });
}
export default LoginComponent;
