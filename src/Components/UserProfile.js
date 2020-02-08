import React, { Component } from "react";
import $ from "jquery";
import Repo from "../Components/Repo.js";
import Commit from "../Components/Commit.js";
import Custom from "../Custom.css";
class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { data } = this.props;
        console.log(data);
        var repos = this.getData(data.repos_url + "?type=all");
        var stars = this.getData(data.url + "/starred");
        var events = this.getData(data.url + "/events");
        console.log(repos);
        return (
            <div className="container-fluid" id="background">
                <div className="container bg-white" id="profile">
                    <h1>{data.login}</h1>
                    <img src={data.avatar_url} alt="Avatar"></img>
                    <br></br>
                    <div className="container border border-dark" id="details">
                        <p>
                            Name: {(data.name != null) ? data.name : data.login}
                            <br></br>
                            Company: {(data.company != null) ? data.company : "None"}
                            <br></br>
                            Blog: <a href={data.blog}>{data.blog}</a>
                            <br></br>
                            Email: <a href={"mailto:"+data.email}>{(data.email != null) ? data.email : "None"}</a>
                            <br></br>
                            Bio: {data.bio}
                        </p>
                    </div>
                    <br></br>
                    <div className="container" id="repos">
                        <div className="container border border-dark">
                            <h1> Repositories </h1>
                            <ul className="list-group border border dark rounded" id="reposList">
                                {repos.responseJSON.map((repo, key) =>
                                    <Repo key={key} name={repo.full_name} url={repo.html_url} date={new Date(repo.updated_at)} />)}
                            </ul>
                            <br></br>
                        </div>
                    </div>
                    <br></br>
                    <div className="container" id="stars">
                        <div className="container border border-dark">
                            <h1> Starred Projects </h1>
                            <ul className="list-group border border dark rounded" id="starsList">
                                {stars.responseJSON.map((star, key) =>
                                    <Repo key={key} name={star.full_name} url={star.html_url} date={new Date(star.updated_at)} />)}
                            </ul>
                            <br></br>
                        </div>
                    </div>
                    <br></br>
                    <div className="container" id="commits">
                        <div className="container border border-dark">
                            <h1> Recent Commits </h1>
                            <ul className="list-group border border dark rounded" id="commitsList">
                                {events.responseJSON.map((event, key) =>
                                    <Commit key={key} commits= {event.payload.commits} date={new Date(event.created_at)} repo={event.repo} user={data.login}/>)}
                            </ul>
                            <br></br>
                        </div>
                    </div>
                    <br></br>
                </div>
                <br></br>
            </div>
        )
    }
    getData(url) {
        const { auth } = this.props;
        console.log(url)
        return $.ajax({
            type: "GET",
            headers: { Authorization: "Basic " + auth },
            url: url,
            async: false,
            success: function (data) {
                var repos = data;
                console.log(repos);
            }
        })
    }
}
export default UserProfile;