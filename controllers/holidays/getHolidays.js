const {
  holidaysCollection,
} = require("../../collections/holidays/HolidaysCollection");

const getHolidays = async (req, res) => {
  const cursor = holidaysCollection.find();
  const holidaysData = await cursor.toArray();
  console.log(holidaysData);
  res.send(holidaysData);
};

module.exports = getHolidays;
