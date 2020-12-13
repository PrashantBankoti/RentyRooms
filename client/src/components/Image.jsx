import React from "react";
// import demoImg from "../images/demoImg.jpg";

function Image(props){
    return (
        <img src={props.imgURL} className="card-img" alt="..." />
    )
}

export default Image;
