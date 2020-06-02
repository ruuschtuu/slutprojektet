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

  /*  onClickRemove() {
 
     var user = firebase.auth().currentUser;
     var docRef = firebase.firestore().collection('users').doc(user.uid.toString()).delete();
 
     // Remove the 'capital' field from the document
     var removeCapital = docRef.update({
       capital: firebase.firestore.FieldValue.delete()
     });
 
     return removeCapital;
   } */

  render() {
    const loggedIn = this.state.user || localStorage.getItem("user");
    return (
      <div>  {
        this.state.products &&
        this.state.products.map(product => {
          return (
            <div key={product.id}>
              <div class="card">
                <div class="card-body">
                  <h3>{product.title}</h3>
                  <h5>{product.description}</h5>
                  <p>{product.price} Kr</p>
                </div>
              </div>
              {/* <button onClick={this.onClickRemove.bind(this)}>Remove</button> */}

            </div>
          )
        })
      } </div>

    )

  }
}

export default Booking;
