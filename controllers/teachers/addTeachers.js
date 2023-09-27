const teachersCollection = require("../../collections/teachers/TeachersCollection");

const addTeachers = (req, res) => {
  const data = {
    name: req.body.name,
    designation: req.body.designation,
    phone_number: req.body.phone_number,
  };

  const result = teachersCollection.insertOne(data);

  res.status(200).json(result);
};

module.exports = addTeachers;
