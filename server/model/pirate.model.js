const mongoose = require('mongoose');


const PirateSchema = new mongoose.Schema({
    pirateName: {
        type: String,
        required: [true, "Every pirate needs a name!"]
    },
    imageUrl: {
        type: String,
        required: [true, "please add an image of your pirate!"]
        
    },
    treasureChest: {
        type: Number,
        min: [1, "Every pirate has at least one treasure chest!"]
    },
    catchPhrase: {
        type: String,
        required: [true, "Every pirate needs a catch phrase"]
    },
    position: [{
        type: String,
        require: [true, "Arg, Select Your Position!"],
        enum: ["Captain", "First Mate", "Boatswain", "Powder Monkey"]

    }],
    attribute: [{
        type: String,
        required: [true, "Choose an adornment, PIRATE!"],
        enum: ["Peg Leg", "Eye Patch", "Hook Hand"]
    }]
}, {timestamps: true})

module.exports = mongoose.model('Pirate', PirateSchema);