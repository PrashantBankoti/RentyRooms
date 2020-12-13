const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const RoomSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    roomsNo: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Room = mongoose.model('room', RoomSchema);