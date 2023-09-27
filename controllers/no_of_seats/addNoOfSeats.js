const {
  noOfSeatsCollection,
} = require("../../collections/no_of_seats/NoOfSeatsCollection");

const addNoOfSeats = (req, res) => {
  const data = {
    class: req.body.class,
    noofseats: req.body.noofseats,
  };

  const result = noOfSeatsCollection.insertOne(data);

  res.status(200).json(result);
};

module.exports = addNoOfSeats;
