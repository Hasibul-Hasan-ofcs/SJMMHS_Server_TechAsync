const client = require("../../mongodb_connection/mongoDBConnection");

const holidaysCollection = client.db("main").collection("holidays");

const getHolidays = async (req, res) => {
  const cursor = holidaysCollection.find();
  const holidaysData = await cursor.toArray();
  console.log(holidaysData);
  res.send(holidaysData);
};

module.exports = getHolidays;
