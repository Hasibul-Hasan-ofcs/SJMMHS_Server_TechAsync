const {
  NoOfRoomsCollection,
} = require("../../collections/no_of_rooms/NoOfRoomsCollection");

const getNumberOfRooms = async (req, res) => {
  const cursor = NoOfRoomsCollection.find();
  const roomsNoData = await cursor.toArray();
  console.log(roomsNoData);
  res.send(roomsNoData);
};

module.exports = getNumberOfRooms;
