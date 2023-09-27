const {
  noOfSeatsCollection,
} = require("../../collections/no_of_seats/NoOfSeatsCollection");

const getNumberOfSeats = async (req, res) => {
  const cursor = noOfSeatsCollection.find();
  const noOfSeatsData = await cursor.toArray();
  console.log(noOfSeatsData);
  res.send(noOfSeatsData);
};

module.exports = getNumberOfSeats;
