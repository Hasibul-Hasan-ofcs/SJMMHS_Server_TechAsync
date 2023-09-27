const client = require("../../mongodb_connection/mongoDBConnection");

const teachersCollection = client.db("teachers").collection("all_teachers");

module.exports = teachersCollection;
