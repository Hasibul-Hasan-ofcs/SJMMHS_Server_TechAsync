const client = require("../../mongodb_connection/mongoDBConnection");

const physicalStructureCollection = client
  .db("main")
  .collection("physical_structure");

const getPhysicalStructure = async (req, res) => {
  const cursor = physicalStructureCollection.find();
  const physicalStructureData = await cursor.toArray();
  console.log(physicalStructureData);
  res.send(physicalStructureData);
};

module.exports = getPhysicalStructure;
