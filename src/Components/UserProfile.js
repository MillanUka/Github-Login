import React, { Component } from "react";
import $ from "jquery";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { data } = this.props;
        console.log(data)
        return (
            <div className="container">
                <div className="container border border-dark" id="repos">
                    <h1 className="display-1"> Repositories </h1>
                    <ul className="list-group border border dark">
                        {this.getRepos(data)}
                    </ul>
                </div>
                <div className="sticky-top">
                    <div className="card card-block border border-dark">
                        <div className="card-title">
                            <h1>{data.login}</h1>
                        </div>
                        <div className="card-img-top" style={{ textAlign: "left" }}>
                            <img src={data.avatar_url} alt="Avatar"></img>
                        </div>
                        <div className="card-body">
                            <div className="container-sm">
                                <strong>
                                    <p>Name: {(data.name != null) ? data.name : data.login}</p>
                                    <p>Company: {(data.company != null) ? data.company : "None"}</p>
                                    <p>Blog: <a href={data.blog}>{data.blog}</a></p>
                                    <p>Email: {(data.email != null) ? data.email : "None"}</p>
                                    <p>Bio: {data.bio}</p>
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    getRepos(data) {
        $.ajax({
            type: "GET",
            url: data.repos_url,
            success: function (data) {
                console.log(data);
    
                return data.map(function(repo, key){
                    console.log(repo.full_name)
                    return <li className="list-group-item border border-dark" key={key}>{repo.full_name}</li>;
                });
            }
    
        });
    }
}




export default UserProfile;