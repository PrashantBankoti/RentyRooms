import {GET_ROOMS, ADD_ROOM, DELETE_ROOM} from "./types";

export const getRooms=() =>{
    return{
        type: GET_ROOMS
    };
}