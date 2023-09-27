const client = require("../../mongodb_connection/mongoDBConnection");

const successfulStudentsCollection = client
  .db("students")
  .collection("successful_students_alt");

module.exports = successfulStudentsCollection;
