import React, { Component } from "react";

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { commits, date, repo, user } = this.props;
        console.log(user)
        if (commits != null) {
            return commits.map((commit, key) => {
                var message = commit.message;
                var messageLink = commit.url;
                console.log(commit)
                return (
                    <li className="list-group-item border border-dark" id="commitItem">
                        <h5><a href={commits.url}>Message: </a></h5>
                        <h5><a href={messageLink}>{message}</a></h5>
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
