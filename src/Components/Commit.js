import React, { Component } from "react";

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { commits, date, repo, user } = this.props;
        if (commits != null) {
            return commits.map((commit, key) => {
                var message = commit.message;
                return (
                    <li className="list-group-item border border-dark" id="item" style={{textAlign : "left"}}>
                        <h5><a href={"https://github.com/" + repo.name + "/commit/" + commit.sha}>{message}</a></h5>
                        <h5>Created At: {date.toDateString()}</h5>
                        <h5><a href={"https://github.com/" + repo.name}>{repo.name}</a></h5>
                    </li>
                )

            })

        }
        return (<React.Fragment></React.Fragment>)
    }
}
export default Event;
