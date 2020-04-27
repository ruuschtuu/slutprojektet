import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (


    <div className={"nav"}>

      <ul>
        <div id={"logo"}>
          <img src={require("./logo.png")} />
        </div>
        <li> <Link to={"/home"}>Hem </Link>         </li>
        <li> <Link to={"/features"}>Tjänster</Link>  </li>
        <li> <Link to={"/book"}>Boka nu</Link>      </li>
        <li> <Link to={"/bookings"}>Mina bokningar</Link> </li>
        <li> <Link to={"/contact"}>Kontakt</Link>    </li>
      </ul>
    </div>



  )
}

export default Navbar;