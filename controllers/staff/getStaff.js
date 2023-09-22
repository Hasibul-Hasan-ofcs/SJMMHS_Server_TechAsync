const client = require("../../mongodb_connection/mongoDBConnection");

const staffCollection = client.db("staff").collection("base");

const getStaff = async (req, res) => {
  const cursor = staffCollection.find();
  const staffData = await cursor.toArray();
  console.log(staffData);
  res.send(staffData);
};

module.exports = getStaff;
