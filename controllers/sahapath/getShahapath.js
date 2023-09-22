const client = require("../../mongodb_connection/mongoDBConnection");

const sahapathCollection = client.db("main").collection("sahapath");

const getSahapath = async (req, res) => {
  const cursor = sahapathCollection.find();
  const sahapathData = await cursor.toArray();
  console.log(sahapathData);
  res.send(sahapathData);
};

module.exports = getSahapath;
