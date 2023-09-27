const { ObjectId } = require("mongodb");
const {
  noOfSeatsCollection,
} = require("../../collections/no_of_seats/NoOfSeatsCollection");

const deleteNoOfSeats = (req, res) => {
  const id = req.params.id;

  const query = {
    _id: new ObjectId(id),
  };

  const result = noOfSeatsCollection.deleteOne(query);

  res.send(result);
};

module.exports = deleteNoOfSeats;
