import React, { Component } from "react";
import firebase from "../FirebaseConfig";




class UserProfile extends Component {

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
                <img src={this.props.image} className={"card-img-top"} alt={"img"} />
                <br />
                Profile info {this.props.userData}
                <br />
                <button onClick={this.deleteAccount.bind(this)}> Radera konto</button>
                <button onClick={this.logOut.bind(this)}> Logout</button>

                <form onSubmit={this.resetPassword.bind(this)}>
                    <input type="email" name="resetEmail"></input>
                    <button >Reset password </button>
                </form>

            </div>
        )
    }
}


export default UserProfile;
