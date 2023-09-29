const client = require("../../mongodb_connection/mongoDBConnection");

const exPrincipalCollection = client.db("teachers").collection("ex_principal");

module.exports = exPrincipalCollection;
