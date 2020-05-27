import React, { Component } from "react";
import firebase from "./FirebaseConfig";

class Booking extends Component {

  state = {
    products: null,
    user: null || localStorage.getItem("user")
  }

  componentDidMount() {
    //get username

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

    //get products
    var docRef = firebase.firestore().collection("users").doc(user.uid.toString())
      .collection("products");

    docRef.get().then(snapshot => {
      const products = []
      snapshot.forEach(doc => {
        const data = doc.data()
        products.push(data)
      })
      this.setState({ products: products })
    })
  }

  render() {
    const loggedIn = this.state.user || localStorage.getItem("user");
    return (
      <div>  {
        this.state.products &&
        this.state.products.map(product => {
          return (
            <div key={product.id}>
              <h1>{product.title}</h1>
              <h2 id="bookingsTableDescription">{product.description}</h2>
              <h3 id="bookingsTablePrice">{product.price}</h3>
            </div>
          )
        })
      } </div>

    )

  }
}

export default Booking;
