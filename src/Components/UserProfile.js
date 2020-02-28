import React, { Component } from "react";
import Repo from "../Components/Repo.js";
import Commit from "../Components/Commit.js";
import Custom from "../Custom.css";
class UserProfile extends Component {

    constructor(props) {
        super(props);
        const { data } = this.props;
        this.getRepos = this.getRepos.bind(this);
        this.getStars = this.getStars.bind(this);
        this.getEvents = this.getEvents.bind(this);

        this.state = {
            isFetching: false,
            repos: this.getRepos(data),
            stars: this.getStars(data),
            events: this.getEvents(data)
        };
    }

    render() {
        const { data } = this.props;
        return (<div className="container-fluid" id="background">
            <div className="container bg-white" id="profile">
                <h1>{data.login}</h1>
                <img src={data.avatar_url} alt="Avatar"></img>
                <br></br>
                <div className="container border border-dark" id="details">
                    <p>
                        Name: {(data.name != null) ? data.name : data.login}
                        <br />
                        Company: {(data.company != null) ? data.company : "None"}
                        <br />
                        Blog: <a href={data.blog}>{data.blog}</a>
                        <br />
                        Email: <a href={"mailto:" + data.email}>{(data.email != null) ? data.email : "None"}</a>
                        <br />
                        Bio: {data.bio}
                        <br />
                        <a>View on Github</a>
                    </p>
                </div>
                <br></br>
                <div className="container rounded" id="listContainer">
                    <div className="container border border-dark">
                        <h1> Repositories </h1>
                        <ul className="list-group border border dark rounded" id="list">
                            {this.state.isFetching && (this.state.repos.map((repo, key) =>
                                <Repo key={key} name={repo.full_name} url={repo.html_url} date={new Date(repo.updated_at)} />))}
                        </ul>
                        <br></br>
                    </div>
                </div>
                <br></br>
                <div className="container rounded" id="listContainer">
                    <div className="container border border-dark">
                        <h1> Starred Projects </h1>
                        <ul className="list-group border border dark rounded" id="list">
                            {this.state.isFetching && (this.state.stars.map((star, key) =>
                                <Repo key={key} name={star.full_name} url={star.html_url} date={new Date(star.updated_at)} />))}
                        </ul>
                        <br></br>
                    </div>
                </div>
                <br></br>
                <div className="container rounded" id="listContainer">
                    <div className="container border border-dark">
                        <h1> Recent Commits </h1>
                        <ul className="list-group border border dark rounded" id="list">
                            {this.state.isFetching && this.state.events.map((event, key) =>
                                <Commit key={key} commits={event.payload.commits} date={new Date(event.created_at)} repo={event.repo} user={data.login} />)}
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

    async getRepos(data) {
        var dataReturned = await this.getData(data.repos_url + "?type=all");
        await this.setState({ repos: dataReturned });
        return await dataReturned
    }
    async getStars(data) {
        var dataReturned = await this.getData(data.url + "/starred");
        await this.setState({ stars: dataReturned });
        return await dataReturned;
    }

    async getEvents(data) {
        var dataReturned = await this.getData(data.url + "/events");
        await this.delay(1000);
        await this.setState({ events: dataReturned, isFetching: true });
        return await dataReturned
    }

    delay = ms => new Promise(res => setTimeout(res, ms));

    async getData(url) {
        var dataReturned;
        await fetch(url)
            .then(
                await async function (response) {
                    if (response.status !== 200) {
                        alert('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    await response.json().then( async function (data) {
                        dataReturned = await data;
                        if (data.message) {
                            alert("You have made too many calls to the Github API. Please try again in an hour");
                            return;
                        }
                    }).catch(function (err) {
                        alert("There was a problem")
                    });
                })
        return await dataReturned;
    }
}
export default UserProfile;