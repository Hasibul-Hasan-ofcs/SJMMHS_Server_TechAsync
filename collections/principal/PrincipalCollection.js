const client = require("../../mongodb_connection/mongoDBConnection");

const principalCollection = client.db("teachers").collection("principal");

module.exports = principalCollection;
