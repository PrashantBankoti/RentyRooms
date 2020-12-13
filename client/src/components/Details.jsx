import React from "react";

function Details(props){
    return(
        
        <div className="card-body">
        <h5 className="card-title">₹{props.cost}/month</h5>
        <p className="card-text lead">{props.roomsNo} rooms</p>
        <p className="card-text"><small className="text-muted">{props.info}</small></p>
        </div>
    );
}

export default Details;
