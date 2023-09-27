const {
  managementCollection,
} = require("../../collections/management/Management");

const addManagement = (req, res) => {
  const data = {
    name: req.body.name,
    designation: req.body.designation,
    phone_number: req.body.phone_number,
  };

  const result = managementCollection.insertOne(data);

  res.status(200).json(result);
};

module.exports = addManagement;
