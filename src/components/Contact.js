import React, { Component } from "react";
import firebase from "./FirebaseConfig";

export default class Contact extends Component {


    onSubmitForm(e) {
        e.preventDefault();
        //firebase.firestore()
        const db = firebase.firestore();
        const docRef = db.collection("contactFormData").doc("userId");

        docRef.set({
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            meddelande: e.target.elements.textarea.value
        })



    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm.bind(this)}>
                    <input type="text" name="name" />
                    <input type="email" name="email" />
                    <textarea name="textarea" rows="4" cols="50"> </textarea>


                    <button>Kontakta oss</button>
                </form>
            </div>
        )
    }
} 