const client = require("../../mongodb_connection/mongoDBConnection");

const routineCollection = client.db("routine").collection("examroutine");

const getExamRoutine = async (req, res) => {
  const cursor = routineCollection.find();
  const routineData = await cursor.toArray();
  console.log(routineData);
  res.send(routineData);
};

module.exports = getExamRoutine;
