const { ObjectId } = require("mongodb");
const successfulStudentsCollection = require("../../collections/successful_students/SuccessfulStudents");

const deleteSuccessfulStudents = (req, res) => {
  const id = req.params.id;

  const query = {
    _id: new ObjectId(id),
  };

  const result = successfulStudentsCollection.deleteOne(query);

  res.send(result);
};

module.exports = deleteSuccessfulStudents;
