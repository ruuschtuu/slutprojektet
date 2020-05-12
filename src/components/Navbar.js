import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Auth/Logout";


const Navbar = () => {
  return (


    <div className={"nav"}>

      <ul>
        <div id={"logo"}>
          <img src={require("./logo.png")} alt={"bosse"} />
        </div>
        <li> <Link to={"/home"}>Hem </Link>         </li>
        <li> <Link to={"/features"}>Tjänster</Link>  </li>
        <li> <Link to={"/book"}>Boka nu</Link>      </li>
        <li> <Link to={"/bookings"}>Mina bokningar</Link> </li>
        <li> <Link to={"/adminsida"}>Admin-sida</Link>    </li>
        <Logout />
      </ul>
    </div>



  )
}

export default Navbar;