import React, { Component } from "react";
import $ from "jquery";
import Repo from "../Components/Repo.js";
import Custom from "../Custom.css";
class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { data } = this.props;
        console.log(data);
        var repos = this.getRepos(data)
        console.log(repos);
        return (
            <div className="container-fluid" id="details">
                <div className="container bg-white">
                    <h1>{data.login}</h1>
                    <img src={data.avatar_url} alt="Avatar"></img>
                    <br></br>
                    <div className="container border border-dark">
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
                            <ul className="list-group border border dark" id="reposList">
                                {repos.responseJSON.map((repo, key) =>
                                    <Repo key={key} name={repo.full_name} />)}
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
    getRepos(data) {
        const { auth } = this.props;
        console.log(data.url)
        return $.ajax({
            type: "GET",
            headers: { Authorization: "Basic " + auth },
            url: data.repos_url + "?type=all&per_page=100",
            async: false,
            success: function (data) {
                var repos = data;
                console.log(repos);
            }
        })
    }
}
export default UserProfile;