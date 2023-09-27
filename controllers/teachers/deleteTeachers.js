const { ObjectId } = require("mongodb");
const teachersCollection = require("../../collections/teachers/TeachersCollection");

const deleteTeachers = (req, res) => {
  const id = req.params.id;

  const query = {
    _id: new ObjectId(id),
  };

  const result = teachersCollection.deleteOne(query);

  res.send(result);
};

module.exports = deleteTeachers;
