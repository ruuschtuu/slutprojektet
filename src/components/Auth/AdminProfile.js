import React, { Component } from "react";
import Adminform from "../Adminform";



class AdminProfile extends Component {

    logOut() {
        localStorage.clear();
        window.location.reload(false);
    }
    render() {
        return (
            <div>
                <h1>
                    Welcome {this.props.userData} Admin
                </h1>


                <button onClick={this.logOut.bind(this)}> Logout</button>

                <Adminform />

            </div>
        )
    }
}


export default AdminProfile;