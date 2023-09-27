const client = require("../../mongodb_connection/mongoDBConnection");

const holidaysCollection = client.db("main").collection("holidays");

module.exports = { holidaysCollection };
