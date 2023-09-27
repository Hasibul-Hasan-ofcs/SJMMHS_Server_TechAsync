const {
  circularCollection,
} = require("../../collections/circular/CircularCollection");

const getCirculars = async (req, res) => {
  const cursor = circularCollection.find();
  const circularData = await cursor.toArray();
  console.log(circularData);
  res.send(circularData);
};

module.exports = getCirculars;
