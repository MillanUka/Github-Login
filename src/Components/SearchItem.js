import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import UserProfile from "./UserProfile.js";
import Constants from "../Constants.js";
import ReactDOM from 'react-dom';
import $ from "jquery";
class SearchItem extends Component {
    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
    }
    render() {
        const { searchItem } = this.props;
        return (<div>
            <div className={"card border"}>
                <div className={"card-tile"}>
                    <h1>{searchItem.login}</h1>
                    <img className={"card-img-top border"} src={searchItem.avatar_url} alt={"User profile"} />
                </div>
                <Router>
                    <Link to="/login" className="btn bg-success text-white" onClick={() => {
                        this.handleLogin(searchItem.login)
                    }}><h3>Check Profile</h3></Link>
                </Router>
            </div>
        </div>);
    }

    handleLogin(user) {
        fetch(Constants.API + "users/" + user)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        ReactDOM.render((
                            <Router>
                                <Route path="/user" />
                                <UserProfile data={data} />
                            </Router>
                        ), document.getElementById('root'));
                        console.log(data);
                    });
                }
            )
            .catch(function (err) {
                $("#usernameInput").removeClass("form-control border border-dark");
                $("#usernameInput").addClass("form-control border border-danger");
                alert("Your Login credentials are incorrect!");
            });
    }

}



export default SearchItem;