const { ObjectId } = require("mongodb");
const {
  managementCollection,
} = require("../../collections/management/Management");

const deleteManagement = (req, res) => {
  const id = req.params.id;

  const query = {
    _id: new ObjectId(id),
  };

  const result = managementCollection.deleteOne(query);

  res.send(result);
};

module.exports = deleteManagement;
