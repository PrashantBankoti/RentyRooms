import {GET_ROOMS, ADD_ROOM, DELETE_ROOM} from "../actions/types";

const initialState = {
    rooms :[
        {
            id:1,
            imgURL:"https://cdn.home-designing.com/wp-content/uploads/2019/01/Small-apartment-design.jpg",
            cost:"$20/mo",
            area:"30-40 sq.ft",
            info:"Great House for Family",
            location:"Almora,UK"
    
        },
    
        {
    
            id:2,
            imgURL:"https://techcrunch.com/wp-content/uploads/2019/03/blueground-apartment-2-2-2.jpg",
            cost:"$30/mo",
            area:"30-40 sq.ft",
            info:"Great House for Family",
            location:"Haldwani,UK"
        },
    
        {
    
            id:3,
            imgURL:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apartment-decorating-ideas-amity-9-25-19-0189-1584985218.jpg",
            cost:"$25/mo",
            area:"30-40 sq.ft",
            info:"Great House for Family",
            location:"Haldwani,UK"
        },
    
        {
            id:4,
            imgURL:"https://i.insider.com/5dde948ffd9db26a593ebd49?width=600&format=jpeg&auto=webp",
            cost:"$28/mo",
            area:"30-40 sq.ft",
            info:"Great House for Family",
            location:"Dehradun,UK"
        },
    
        {
            id:5,
            imgURL:"https://blog.architizer.com/wp-content/uploads/31-1.jpg",
            cost:"$30/mo",
            area:"30-40 sq.ft",
            info:"Great House for Family",
            location:"Haldwani,UK"
        },
    
        {
            id:6,
            imgURL:"https://www.apartments.com/images/default-source/default-album/luxury-kitchen.tmb-featuredim.jpg?sfvrsn=de3fa2f_0",
            cost:"$40/mo",
            area:"30-40 sq.ft",
            info:"Great House for Family",
            location:"Almora,UK"
        },
    
        {
            id:7,
            imgURL:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apartment-decorating-ideas-amity-9-25-19-0189-1584985218.jpg",
            cost:"$5/mo",
            area:"30-40 sq.ft",
            info:"Great House for Family",
            location:"Almora,UK"
    
        },
    
        {
            id:8,
            imgURL:"https://i.insider.com/5dde948ffd9db26a593ebd49?width=600&format=jpeg&auto=webp",
            cost:"$8/mo",
            area:"30-40 sq.ft",
            info:"Great House for Family",
            location:"Bageshwar,UK"
    
        }
    
    ]
}

export default function roomReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ROOMS:
            return {
                ...state
            };
            default:
                return state;
    }
}