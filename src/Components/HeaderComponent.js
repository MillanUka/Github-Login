import React, { Component } from "react";
import GithubLogo from "../Resources/GitHub.png"
class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (

            <div className="container-fluid bg-dark" style={{ textAlign: "center", height: "150%" }}>
                <img src={GithubLogo} alt="Github logo" style={{ height: "5%", width: "5%" }} />
                <h1 className="display-5 text-white">Github Login</h1>
            </div>
        )
    }
}

export default HeaderComponent;
