const client = require("../../mongodb_connection/mongoDBConnection");

const videoCollection = client.db("main").collection("videos");

module.exports = videoCollection;
