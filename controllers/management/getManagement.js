const {
  managementCollection,
} = require("../../collections/management/Management");

const getManagement = async (req, res) => {
  const cursor = managementCollection.find();
  const managementData = await cursor.toArray();
  console.log(managementData);
  res.send(managementData);
};

module.exports = getManagement;
