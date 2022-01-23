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
        .then(newlyCreatedUser => res.json({ joke: newlyCreatedJoke }))
        .catch(err => 
            res.json({ 
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
                message: "🤚🏼🤚🏼🤚🏼 UnAble to Find All Jokes ✋🏼✋🏼✋🏼",
                error: err
            })
        )
};

// //// UPDATE //////////////////////////////////

// //// DELETE //////////////////////////////////