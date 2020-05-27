import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Card from "./Card";
import Book from "./Form";
import Navbar from "./Navbar";
import App from "./App";
import "../style/_main.scss"
import Booking from "./Booking";
/* import Adminform from "./Adminform";
import AdminLogin from "./Auth/AdminLogin"; */
import AdminSida from "./AdminSida";
import Notfoundpage from "./Notfoundpage";
import Logout from "./Auth/Logout";
import FirebaseTest from "./FireBasetest";
//import UserLogin from "./AuthUser/UserLogin"
import UserPage from "./AuthUser/UserPage";
import Contact from "./Contact";
import UserProfile from "./AuthUser/UserProfile";
import UserUpdateProfile from "./AuthUser/UserUpdateProfile";




const Approute = () => {
  return (
    <div>

      <BrowserRouter>
        <Navbar />


        <Switch>
          <Route path="/home" component={App} exact ></Route>
          <Route path="/features" component={Card} exact ></Route>
          <Route path="/book" component={Book} exact></Route>
          <Route path="/logout" component={Logout} exact></Route>
          <Route path="/firebasetest" component={FirebaseTest} exact></Route>
          <Route path="/booking" component={Booking} exact></Route>
          <Route path="/adminsida" exact component={AdminSida}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/userprofile" exact component={UserProfile}></Route>
          <Route path="/userPage/updateProfile" component={UserUpdateProfile} />


          <Route path="/userpage" exact component={UserPage}></Route>


          <Route component={Notfoundpage}></Route>
        </Switch>
      </BrowserRouter>
    </div>


  )
}

export default Approute;