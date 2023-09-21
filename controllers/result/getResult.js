const client = require("../../mongodb_connection/mongoDBConnection");

const resultCollection = client.db("result").collection("class6");

const getResults = async (req, res) => {
  const { classvalue, reg } = req.params;
  const query = {
    reg: reg,
  };
  console.log(classvalue, reg);
  const cursor = resultCollection.find(query);
  const resultData = await cursor.toArray();
  console.log(resultData);
  res.send(resultData);
};

module.exports = getResults;
