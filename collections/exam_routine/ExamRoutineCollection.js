const client = require("../../mongodb_connection/mongoDBConnection");

const examRoutineCollection = client.db("routine").collection("examroutine");

module.exports = examRoutineCollection;
