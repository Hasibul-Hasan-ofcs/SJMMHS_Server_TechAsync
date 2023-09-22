const client = require("../../mongodb_connection/mongoDBConnection");

const successfulStudentsCollection = client
  .db("students")
  .collection("successful_students");

const getSuccessfulStudents = async (req, res) => {
  const cursor = successfulStudentsCollection.find();
  const successfulStudentsData = await cursor.toArray();
  console.log(successfulStudentsData);
  res.send(successfulStudentsData);
};

module.exports = getSuccessfulStudents;
