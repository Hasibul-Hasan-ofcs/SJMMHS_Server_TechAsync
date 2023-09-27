const staffCollection = require("../../collections/staff/StaffCollection");

const addStaff = (req, res) => {
  const data = {
    name: req.body.name,
    designation: req.body.designation,
    phone_number: req.body.phone_number,
  };

  const result = staffCollection.insertOne(data);

  res.status(200).json(result);
};

module.exports = addStaff;
