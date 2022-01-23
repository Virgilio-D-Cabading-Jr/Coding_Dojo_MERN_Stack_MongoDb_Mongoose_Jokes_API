/////////////////////////////////////////////////
//  MONGOOSE CONFIG
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const mongoose = require("mongoose");

// //// SCHEMAS /////////////////////////////////
const JokeSchema = new mongoose.Schema({
	setup: String,
	punchline: String
});

// //// MODELS //////////////////////////////////
const Joke = mongoose.model("Joke", JokeSchema);

// **** Export Model ********
module.exports = Joke;