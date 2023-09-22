const client = require("../../mongodb_connection/mongoDBConnection");

const computerUsageCollection = client.db("main").collection("computer_usage");

const getComputerUsage = async (req, res) => {
  const cursor = computerUsageCollection.find();
  const computerUsageData = await cursor.toArray();
  console.log(computerUsageData);
  res.send(computerUsageData);
};

module.exports = getComputerUsage;
