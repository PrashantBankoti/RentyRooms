const express = require('express');
const router = express.Router();

//Room Model
const Room = require('../../models/Room');

//GET api/items
//GET All Items
//Public
router.get('/', (req, res) => {
    Room.find()
        .sort({ date: -1 })
        .then(rooms => res.json(rooms))
});

//POST api/items
//Create A Items
//Public
router.post('/', (req, res) => {
    const newRoom = new Room({
        name: req.body.name,
        address: req.body.address,
        description: req.body.description,
        roomsNo: req.body.roomsNo
    });

    newRoom.save().then(room => res.json(room));
});

//DELETE api/items
//Delete A Items
//Public
router.delete('/:id', (req, res) => {
    Room.findById(req.params.id)
        .then(room => room.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})




module.exports = router;