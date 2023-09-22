const client = require("../../mongodb_connection/mongoDBConnection");

const principalCollection = client.db("teachers").collection("principal");

const getPrincipal = async (req, res) => {
  const cursor = principalCollection.find();
  const principalData = await cursor.toArray();
  console.log(principalData);
  res.send(principalData);
};

module.exports = getPrincipal;
