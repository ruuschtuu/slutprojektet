import React, { Component } from "react";


class Logout extends Component {

    logOut() {

        localStorage.clear();
        window.location.reload(false);
    }
    render() {
        return (
            <div>
                <li><a href="/adminsida" onClick={this.logOut.bind(this)}>Logout</a></li>
            </div>
        )
    }
}

export default Logout;
