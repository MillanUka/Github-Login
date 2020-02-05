import React, { Component } from "react";

class UserProfile extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
        const { data } = this.props;
        console.log(data)
        return(
            <div className="container">

            </div>
        )
    }
}