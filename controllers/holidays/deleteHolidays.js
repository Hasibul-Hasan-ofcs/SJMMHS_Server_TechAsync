const { ObjectId } = require("mongodb");
const {
  holidaysCollection,
} = require("../../collections/holidays/HolidaysCollection");

const deleteHolidays = (req, res) => {
  const id = req.params.id;

  const query = {
    _id: new ObjectId(id),
  };

  const result = holidaysCollection.deleteOne(query);

  res.send(result);
};

module.exports = deleteHolidays;
