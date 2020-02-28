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
        <div className="container-xl border" style={{ textAlign: "center", maxWidth: "25%" }}>
          <form>
            <div className="container-xl" style={{ textAlign: "left" }}>
              <div className="form-group">
                <input type="text" className="form-control border border-dark" placeholder="" id="usernameInput"></input>
              </div>
            </div>
          </form>
          <button className={"btn bg-success text-white"} onClick={this.handleSearch}>Search</button>
          <hr className="bg-success"></hr>
        </div>
        <div className="container-sm">
          <div className="card-column border border-dark" id="searchResults">
            {
              console.log(this.state.searchItems)
            }
            {
              this.state.searchItems.map((searchItem) => {
                console.log(searchItem);
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
    console.log(Constants.API + Constants.SEARCH_USER + searchQuery);
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
            console.log(data);
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

    console.log(searchResults);
    await this.setState({searchItems : searchResults});
  }
}




export default Search;
