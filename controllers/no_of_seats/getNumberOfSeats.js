const client = require("../../mongodb_connection/mongoDBConnection");

const noOfSeatsCollection = client.db("main").collection("number_of_seats");

const getNumberOfSeats = async (req, res) => {
  const cursor = noOfSeatsCollection.find();
  const noOfSeatsData = await cursor.toArray();
  console.log(noOfSeatsData);
  res.send(noOfSeatsData);
};

module.exports = getNumberOfSeats;
