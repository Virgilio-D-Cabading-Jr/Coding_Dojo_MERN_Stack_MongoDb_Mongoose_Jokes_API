/////////////////////////////////////////////////
//  JOKE ROUTE
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const JokeController = require("../controllers/joke.controller");
const Joke = require("../models/joke.model");

// //// ROUTES //////////////////////////////////
module.exports = app => {
    // **** Create ******************************

    // **** Retrieve ****************************
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/:id", JokeController.fineOneJoke);

    // **** Update ******************************

    // **** Delete ******************************


}