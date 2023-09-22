const client = require("../../mongodb_connection/mongoDBConnection");

const teachersCollection = client.db("teachers").collection("base");

const getTeachers = async (req, res) => {
  const cursor = teachersCollection.find();
  const teachersData = await cursor.toArray();
  console.log(teachersData);
  res.send(teachersData);
};

module.exports = getTeachers;
