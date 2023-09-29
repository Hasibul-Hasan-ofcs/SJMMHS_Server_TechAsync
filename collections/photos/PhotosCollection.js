const client = require("../../mongodb_connection/mongoDBConnection");

const photoCollection = client.db("main").collection("images");

module.exports = photoCollection;
