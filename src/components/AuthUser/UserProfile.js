import React, { Component } from "react";
import firebase from "../FirebaseConfig";
import { Link } from "react-router-dom";



class UserProfile extends Component {

    state = {
        email: "",
        username: ""
    }

    componentDidMount() {
        const userfromLocal = localStorage.getItem("user");
        console.log(userfromLocal);
        var user = firebase.auth().currentUser;
        console.log(user);
        console.log(user.displayName);
        console.log(user.email)

        this.setState({
            username: user.displayName,
            email: user.email
        });
    }

    logOut() {

        localStorage.clear();
        window.location.reload(false);
        firebase.auth().signOut();
    }


    deleteAccount() {
        const userfromLocal = localStorage.getItem("user");
        console.log(userfromLocal);
        var user = firebase.auth().currentUser;
        console.log(user);

        if (user) {
            user.delete().then(function () {
                // User deleted.
            }).catch(function (error) {
                // An error happened.
            });
        }

    }

    resetPassword(e) {
        var auth = firebase.auth();
        var emailAddress = e.target.elements.resetEmail.value;

        auth.sendPasswordResetEmail(emailAddress).then(function () {
            // Email sent.
            console.log("email sent")
        })
        e.preventDefault();
    }



    render() {
        return (
            <div>
                <h1>Välkommen <span id="login-namn">{this.props.userData}</span></h1>
                <br />
                <button onClick={this.deleteAccount.bind(this)}> Radera konto</button>
                <button onClick={this.logOut.bind(this)}> Logout</button>
                <button> <Link to={"/booking"}>Mina bokningar</Link> </button>
                <Link
                    to={{
                        pathname: "/userPage/updateProfile",
                        params: {
                            username: this.state.username,
                            email: this.state.email
                        }
                    }}
                >
                    <button>Edit Profile</button>
                </Link>
            </div>
        )
    }
}


export default UserProfile;
