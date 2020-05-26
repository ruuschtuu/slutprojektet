import React, { Component } from "react";


class Logout extends Component {

    logOut() {

        localStorage.clear();
        window.location.reload(false);
    }
    render() {
        return (
            <div>
                <button onClick={this.logOut.bind(this)}> Logout</button>
            </div>
        )
    }
}

export default Logout;
