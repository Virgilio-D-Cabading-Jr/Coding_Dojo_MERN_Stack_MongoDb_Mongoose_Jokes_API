/////////////////////////////////////////////////
//  JOKE CONTROLLER
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const Joke = require("../models/joke.model");

// //// CREATE //////////////////////////////////

/**
 * Create a New Joke
 * @param {*} req 
 * @param {*} res 
 */
module.exports.createNewJoke = (req, res) => {
    User.create(req.body)
        .then(
            newlyCreatedUser => res.json({ 
                joke: newlyCreatedJoke,
                message: "🍻🍻🍻 Success: Created a Joke 🍻🍻🍻"
            })
        )
        .catch(
            err => res.json({ 
                message: "🤦🤦🏼🤦 Create was not successful 🤦🤦🏼🤦🏼", 
                error: err 
            })
        );
    };

// //// RETRIEVE ////////////////////////////////

/***
 * Find All Jokes
 * @param (*) req
 * @param (*) res
 */
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then( allJokes => 
            res.json({
                jokes: allJokes,
                message: "🍟🍟🍟 Success: Found All Jokes 🍟🍟🍟"
            })
        )
        .catch( err =>
            res.json({
                message: "🤚🏼🤚🏼🤚🏼 Failure: UnAble to Find All Jokes ✋🏼✋🏼✋🏼",
                error: err
            })
        )
};

/**
 * Find One Joke by ID (on Request Params)
 * @param {*} req 
 * @param {*} res 
 */
module.exports.fineOneJoke = (req, res) => {
    Joke.findById(req.params.id)
        .then(
            aJoke => res.json ({
                joke: aJoke,
                message: " Success: Found a Joke "
            })
        )
};

// //// UPDATE //////////////////////////////////

// //// DELETE //////////////////////////////////