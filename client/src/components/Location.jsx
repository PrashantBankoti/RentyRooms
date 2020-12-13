import React from "react";

function Location(props){
    return(
        <div className="card-footer">
                        <small className="text-muted">{props.location}</small>
                    </div>
    );
}

export default Location;

// later we have to make it dynamic using props