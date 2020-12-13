import React from "react";
import Image from "./Image";
import Details from "./Details";
import Location from "./Location";

function Card(props) {
    return (
            <div className="col my-2">
                <div className="card">
                   <Image 
                       imgURL={props.imgURL}
                   />
                   <Details 
                       cost={props.cost}
                       roomsNo={props.roomsNo}
                       info={props.info}
                   />
                   <Location 
                       location={props.location}
                   />
                </div>
            </div>
    );
}

export default Card;