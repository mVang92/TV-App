// Write code to store the `<show-or-actor>` command line argument in a variable named `search`.
var search = process.argv[2];

// Store the `<actor-or-show-name>` command line argument in a variable named `term`.
var term = process.argv.slice(3).join("+");

// Keep in mind that this argument may contain spaces so it may span multiple indexes of `process.argv`.
// Check out the [Array Slice Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
// to achieve this.

// Then write an if/else statement to print to the console whether a show or actor is being searched for.

if (search === "search") {
    console.log("search")
} else if (search === "actor") {
    console.log("actor")
}

module.exports = {
    search: search
}