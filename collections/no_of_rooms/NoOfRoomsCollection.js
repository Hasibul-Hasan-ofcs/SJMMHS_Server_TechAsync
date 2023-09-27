const client = require("../../mongodb_connection/mongoDBConnection");

const NoOfRoomsCollection = client.db("main").collection("number_of_rooms");

module.exports = { NoOfRoomsCollection };
