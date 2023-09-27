const client = require("../../mongodb_connection/mongoDBConnection");

const managementCollection = client.db("management").collection("people");

module.exports = { managementCollection };
