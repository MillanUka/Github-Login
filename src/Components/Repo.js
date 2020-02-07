import React, { Component } from "react";

class Repo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { name } = this.props;
        console.log(name)
        return (
            <li className="list-group-item border border-dark" id="repoItem">
                <h4>{name}</h4>
                <button className="btn text-white">View On Github</button>
            </li>
        )
    }
}
export default Repo;