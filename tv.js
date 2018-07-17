var request = require("request");

// In this activity we will be adding functionality to search the TV Maze API to find a show passed in as a command line argument.

var Movie = require("./cli");
var movie = new TV();

// Open the `tv.js` file. This file contains a constructor function that will be used to create a TV object capable of searching the TV Maze API for shows and actors.

// Install the `request` package by running `npm install request` in your terminal. We will use the `request` module to make AJAX requests to the TV Maze API. Require the `request` package and the built-in `fs` package at the top of the `tv.js` file.

// Inside of the `TV` constructor function's `findShow` method, use the `request` package to hit the TV Maze API for the `URL` string.

function TV(show, genre, rating, network) {
    this.show = show;
    this.genre = genre;
    this.rating = rating;
    this.network = network;
    this.findShow = function (show) {
        request(queryUrl, function (err, response, data) {
            if (!err && response.statusCode === 200) {
            // The following URL can be used to search the TV Maze API for a given show
            var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
            } else {
                return console.log("Error");
            }
        })
    };
    this.printStats = function () {
        console.log("Show: " + this.show);
        console.log("Genre: " + this.genre);
        console.log("Rating: " + this.rating);
        console.log("Network: " + this.network);
    }
    
}

module.exports = TV;

// Once you have the response body of the AJAX request, use `JSON.parse` to convert it to JSON (it comes back as a string).

// After getting the JSON response from the AJAX request, create a string containing the following information from the returned show data:

// The name of the show
// The show's genre(s)
// The show's average rating
// The show's network name
// The show's summary

// Save this string to the `log.txt` file using the `fs.appendFile` method. If the file does not already exist, `fs.appendFile` will create it.

// After saving the data to the `log.txt` file, print this information to the console.

// Verify your code works by running the cli file and passing in the name of a TV show, e.g. `node cli show Scrubs`. This should print the specified information to the console and save it to the `log.txt` file.