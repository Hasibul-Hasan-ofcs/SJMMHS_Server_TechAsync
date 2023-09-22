const client = require("../../mongodb_connection/mongoDBConnection");

const managementCollection = client.db("management").collection("base");

const getManagement = async (req, res) => {
  const cursor = managementCollection.find();
  const managementData = await cursor.toArray();
  console.log(managementData);
  res.send(managementData);
};

module.exports = getManagement;
