const { ObjectId } = require("mongodb");
const {
  NoOfRoomsCollection,
} = require("../../collections/no_of_rooms/NoOfRoomsCollection");

const deleteNumberOfRooms = (req, res) => {
  const id = req.params.id;

  const query = {
    _id: new ObjectId(id),
  };

  const result = NoOfRoomsCollection.deleteOne(query);

  res.send(result);
};

module.exports = deleteNumberOfRooms;
