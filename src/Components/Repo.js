import React, { Component } from "react";

class Repo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { name, url, date } = this.props;
        return (
            <li className="list-group-item border border-dark" id="item">
                <h4>{name}</h4>
                <h4>Last updated: {date.toDateString()}</h4>
                <button className="btn text-white"><a href={url}>View On Github</a></button>
            </li>
        )
    }
}
export default Repo;