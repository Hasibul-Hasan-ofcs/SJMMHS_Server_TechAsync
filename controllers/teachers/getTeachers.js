const teachersCollection = require("../../collections/teachers/TeachersCollection");

const getTeachers = async (req, res) => {
  const cursor = teachersCollection.find();
  const teachersData = await cursor.toArray();
  console.log(teachersData);
  res.send(teachersData);
};

module.exports = getTeachers;
