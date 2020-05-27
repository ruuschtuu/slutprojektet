import React, { Component } from "react";
import firebase from "./FirebaseConfig";

class GetCard extends Component {

    state = {
        user: null || localStorage.getItem("user")
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(
            user => {
                if (user) {
                    this.setState({ user: user.email })
                }
            }
        )
    }

    onClickSaveToFirestore() {
        const userfromLocal = localStorage.getItem("user");
        console.log(userfromLocal);
        var user = firebase.auth().currentUser;
        console.log(user);
        console.log(user.uid);

        const docRef = firebase.firestore().collection("users").doc(user.uid.toString())
            .collection("products").doc(this.props.docId.toString());

        docRef.set({
            id: this.props.docId,
            title: this.props.title,
            description: this.props.description,
            price: this.props.price
        })
    }

    render() {

        return (

            <div className={"card"} style={{ width: "18rem" }}>
                <img src={this.props.image} className={"card-img-top"} alt={"img"} />
                <div className={"card-body"}>
                    <h5 className={"card-title"}> {this.props.title}</h5>
                    <p className={"card-text"}>{this.props.description} </p>
                    <span>{this.props.price} Kr</span><br />
                    <button className={"btn btn-primary"}
                        onClick={this.onClickSaveToFirestore.bind(this)}>Boka</button>

                </div>
            </div>

        )
    }
}

export default GetCard;