const client = require("../../mongodb_connection/mongoDBConnection");

const circularCollection = client.db("main").collection("circular");

const getCirculars = async (req, res) => {
  const cursor = circularCollection.find();
  const circularData = await cursor.toArray();
  console.log(circularData);
  res.send(circularData);
};

module.exports = getCirculars;
