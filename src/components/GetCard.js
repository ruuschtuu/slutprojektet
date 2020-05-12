import React from "react";


const GetCard = (props) => {


    return (

        <div className={"card"} style={{ width: "18rem" }}>
            <img src={props.image} className={"card-img-top"} alt={"img"} />
            <div className={"card-body"}>
                <h5 className={"card-title"}> {props.title}</h5>
                <p className={"card-text"}>{props.description} </p>
                <span>{props.price} Kr</span><br />
                <button className={"btn btn-primary"}>Boka</button>

            </div>
        </div>

    )
}

export default GetCard;