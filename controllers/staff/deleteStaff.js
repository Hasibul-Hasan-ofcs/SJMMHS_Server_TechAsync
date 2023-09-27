const { ObjectId } = require("mongodb");
const staffCollection = require("../../collections/staff/StaffCollection");

const deleteStaff = (req, res) => {
  const id = req.params.id;

  const query = {
    _id: new ObjectId(id),
  };

  const result = staffCollection.deleteOne(query);

  res.send(result);
};

module.exports = deleteStaff;
