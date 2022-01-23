/////////////////////////////////////////////////
//  JOKE MODEL
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const mongoose = require("mongoose");

// //// SCHEMAS /////////////////////////////////
const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: true
	},
	punchline: {
		type: String, 
		required: true
	}
}, {timestamps: true});			// Timestamps implement CreatedAt and UpdatedAt

// //// MODELS //////////////////////////////////
const Joke = mongoose.model("Joke", JokeSchema);

// **** Export Model ********
module.exports = Joke;