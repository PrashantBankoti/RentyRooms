import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function AddRoom(props) {

    const [input, setInput] = useState({
        imgURL: "",
        cost: "",
        roomsNo: "",
        info: "",
        location: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setInput((prevValue) => ({ ...prevValue, [name]: value }));
      }

    function submitRoom(e) {
        setInput({
            imgURL: "",
            cost: "",
            roomsNo: "",
            info: "",
            location: ""
        });
        e.preventDefault();
        return props.onAdd(input);
    }

    return (
        <div>
            <h2 className="my-5">Enter Room Information</h2>
            <form onSubmit={submitRoom}>
                <div class="mb-3">
                    <label for="info" class="form-label">Short description about room</label>
                    <input onChange={handleChange} type="text" name="info" class="form-control" placeholder="About Room" value={input.info} required />
                </div>
                <div class="mb-3">
                    <label for="cost" class="form-label">Enter cost of room set</label>
                    <input onChange={handleChange} type="text" name="cost" class="form-control" placeholder="Cost" value={input.cost} required />
                </div>
                <div class="mb-3">
                    <label for="roomsNo" class="form-label">Number of Rooms</label>
                    <input onChange={handleChange} type="text" name="roomsNo" class="form-control" placeholder="Number of Rooms" value={input.roomsNo} required />
                </div>
                <div class="mb-3">
                    <label for="location" class="form-label">Room Location</label>
                    <input onChange={handleChange} type="text" name="location" class="form-control" placeholder="Enter Location" value={input.location} required />
                </div>
                <div class="mb-3">
                    <label for="imgURL" class="form-label">Room Image</label>
                    <input onChange={handleChange} type="text" name="imgURL" class="form-control" placeholder="Enter Room Image URL" value={input.imgURL} required />
                </div>
                <button type="submit" className="btn btn-lg btn-danger">Add Room</button>
            </form>
        </div>
    );
}

export default AddRoom;
