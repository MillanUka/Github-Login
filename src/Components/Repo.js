import React, { Component } from "react";
import $ from "jquery";

class Repo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { name } = this.props;
        console.log(name)
        return (
            <li className="list-group-item border border-dark">
                <h4>{name}</h4>
                <button className="btn bg-primary text-white" id="repoItem">View On Github</button>
            </li>
        )
    }
}
export default Repo;