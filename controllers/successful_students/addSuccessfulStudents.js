const successfulStudentsCollection = require("../../collections/successful_students/SuccessfulStudents");

const addSuccessfulStudents = (req, res) => {
  const data = {
    name: req.body.name,
    achievement: req.body.achievement,
    passing_year: req.body.passing_year,
    class_of_success: req.body.class_of_success,
  };

  const result = successfulStudentsCollection.insertOne(data);

  res.status(200).json(result);
};

module.exports = addSuccessfulStudents;
