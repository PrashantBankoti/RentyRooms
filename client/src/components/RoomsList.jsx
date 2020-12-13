import React from 'react';
import Card from "./Cards";
import { v4 as uuid } from 'uuid';

import {connect} from "react-redux";
import {getRooms} from "../actions/roomActions";

function createCard(newInfo){
    return(
      <Card 
        key={uuid() }
        imgURL ={newInfo.imgURL}
        cost ={newInfo.cost}
        roomsNo ={newInfo.roomsNo}
        info ={newInfo.info}
        location ={newInfo.location}
      />
    )
  }

  function RoomsList(props){
    const room=props.data;
      return(
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
        {room.map(createCard)}
      </div>
      );
  }

  export default RoomsList;