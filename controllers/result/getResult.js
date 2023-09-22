const client = require("../../mongodb_connection/mongoDBConnection");

const resultCollection6 = client.db("result").collection("class6");
const resultCollection7 = client.db("result").collection("class7");
const resultCollection8 = client.db("result").collection("class8");
const resultCollection9 = client.db("result").collection("class9");
const resultCollection10 = client.db("result").collection("class10");

const getResults = async (req, res) => {
  const { classvalue, reg } = req.params;
  console.log(classvalue, reg);
  const query = {
    rege: reg,
  };
  let cursor;
  if (classvalue == "6") {
    cursor = resultCollection6.find(query);
  } else if (classvalue == "7") {
    cursor = resultCollection7.find(query);
  } else if (classvalue == "8") {
    cursor = resultCollection8.find(query);
  } else if (classvalue == "9") {
    cursor = resultCollection9.find(query);
  } else if (classvalue == "10") {
    cursor = resultCollection10.find(query);
  }
  const resultData = await cursor.toArray();
  console.log(resultData);
  res.send(resultData);
};

module.exports = getResults;
