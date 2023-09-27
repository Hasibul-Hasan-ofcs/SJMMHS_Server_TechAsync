const {
  holidaysCollection,
} = require("../../collections/holidays/HolidaysCollection");

const addHolidays = (req, res) => {
  const data = {
    holiday: req.body.holiday,
    day: req.body.day,
    date: req.body.date,
    noofdays: req.body.noofdays,
  };

  const result = holidaysCollection.insertOne(data);

  res.status(200).json(result);
};

module.exports = addHolidays;
