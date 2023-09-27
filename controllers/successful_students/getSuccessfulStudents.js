const successfulStudentsCollection = require("../../collections/successful_students/SuccessfulStudents");

const getSuccessfulStudents = async (req, res) => {
  const cursor = successfulStudentsCollection.find();
  const successfulStudentsData = await cursor.toArray();
  console.log(successfulStudentsData);
  res.send(successfulStudentsData);
};

module.exports = getSuccessfulStudents;
