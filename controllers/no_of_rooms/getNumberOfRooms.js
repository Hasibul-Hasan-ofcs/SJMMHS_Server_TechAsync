const client = require("../../mongodb_connection/mongoDBConnection");

const roomsNoCollection = client.db("main").collection("number_of_rooms");

const getNumberOfRooms = async (req, res) => {
  const cursor = roomsNoCollection.find();
  const roomsNoData = await cursor.toArray();
  console.log(roomsNoData);
  res.send(roomsNoData);
};

module.exports = getNumberOfRooms;
