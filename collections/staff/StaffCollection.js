const client = require("../../mongodb_connection/mongoDBConnection");

const staffCollection = client.db("staff").collection("people");

module.exports = staffCollection;
