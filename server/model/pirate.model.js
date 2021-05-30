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

    pegLeg: { type: Boolean, default: true },
    eyePatch: { type: Boolean, default: true },
    hookHand: { type: Boolean, default: true }
}, { timestamps: true })

module.exports = mongoose.model('Pirate', PirateSchema);