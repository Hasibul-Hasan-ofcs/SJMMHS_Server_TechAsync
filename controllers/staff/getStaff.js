const staffCollection = require("../../collections/staff/StaffCollection");

const getStaff = async (req, res) => {
  const cursor = staffCollection.find();
  const staffData = await cursor.toArray();
  console.log(staffData);
  res.send(staffData);
};

module.exports = getStaff;
