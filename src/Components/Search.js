import React, { Component } from "react";
import Constants from "../Constants.js";
import SearchItem from "./SearchItem.js";
class Search extends Component {
  constructor(props) {
    super(props);

    this.nextSearchResultsLinks = "";
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      searchItems: []
    };
  }

  render() {
    return (
      <div>
        <div className={"container-xl"} style={{ textAlign: "center"}}>
          <form>
              <div className={"input-group input-group-sm"}>
                <input type={"text"} className={"form-control border border-dark"} placeholder={""} id={"usernameInput"}></input>
                <div className={"btn-sm bg-success text-white"} onClick={this.handleSearch}>Search</div>
              </div>
          </form>
          
          <hr className="bg-success"></hr>
        </div>
        <div className={"container-xl"}>
          <div className={"card-column border border-dark"} id={"searchResults"}>
            {
              this.state.searchItems.map((searchItem) => {
                return <SearchItem searchItem={searchItem} key={searchItem.id}/>
              })
            }
          </div>
        </div>
      </div>

    )
  }

  async handleSearch() {
    var searchResults = [];
    var searchQuery =  document.getElementById("usernameInput").value;
    await fetch(Constants.API + Constants.SEARCH_USER + searchQuery)
    .then(
      await async function (response) {
          if (response.status !== 200) {
            alert('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
  
          // Examine the text in the response
         await response.json().then( function (data) {
            if (data.message) {
              alert("You have made too many calls to the Github API. Please try again in an hour");
              return;
            }

            data.items.forEach(element => {
              searchResults.push(element);
            });
          });
        }
      )
      .catch(function (err) {
        alert("There was a problem")
      });

    await this.setState({searchItems : searchResults});
  }
}




export default Search;
