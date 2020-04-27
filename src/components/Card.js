import React from "react";
import { Link } from "react-router-dom";
/* import faker from "faker"; */

/* import Form from "./Form"; */


const Card = () => {


    return (

        <div>
            <div class={"card"}>
                <img src={"https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt={"Avatar"} style={{ width: "100%" }} />
                <div class={"container"}>
                    <h4 className={"title"}>Ansikts Massage</h4>
                    <p className={"description"}>är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet...</p>
                    <button className={"btn2"}><Link to={"/book"}>Boka nu</Link></button>
                    <span className={"span-price"}>2000kr</span>
                </div>
            </div>
        </div>
    )
}

export default Card;

