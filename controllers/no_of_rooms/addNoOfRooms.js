const {
  NoOfRoomsCollection,
} = require("../../collections/no_of_rooms/NoOfRoomsCollection");

const addNumberOfRooms = (req, res) => {
  const data = {
    floor: req.body.floor,
    numberofclasses: req.body.numberofclasses,
  };

  const result = NoOfRoomsCollection.insertOne(data);

  res.status(200).json(result);
};

module.exports = addNumberOfRooms;
