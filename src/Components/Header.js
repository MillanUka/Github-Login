import React, { Component } from "react";
import GithubLogo from "../Resources/GitHub.png"
class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="container-fluid bg-dark" style={{ textAlign: "center", height: "100%" }}>
                <img src={GithubLogo} alt="Github logo"  id={"github-logo"}/>
                <h1 className="display-5 text-white" style={{ height: "100%", paddingLeft: "10%" }} >Github Search</h1>
            </div>
        )
    }
}

export default HeaderComponent;
