const { ObjectId } = require("mongodb");
const {
  circularCollection,
} = require("../../collections/circular/CircularCollection");

const deleteCircular = (req, res) => {
  const id = req.params.id;

  const query = {
    _id: new ObjectId(id),
  };

  const result = circularCollection.deleteOne(query);

  res.send(result);
};

module.exports = deleteCircular;
