const client = require("../../mongodb_connection/mongoDBConnection");

const circularCollection = client.db("main").collection("circular");

module.exports = { circularCollection };
