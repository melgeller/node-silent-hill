const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema(
    {
    title: {type: String, required: true},
    year: {type: Number, required: true},
    poster: {type: String, required: true},
    platform:{type: String, required: false},
    about:{type:String, required:false}


}, {timestamps: true}
);

const Game = mongoose.model("games", gameSchema);

module.exports = Game;
