const client = require("../../mongodb_connection/mongoDBConnection");

const noOfSeatsCollection = client.db("main").collection("number_of_seats");

module.exports = { noOfSeatsCollection };
