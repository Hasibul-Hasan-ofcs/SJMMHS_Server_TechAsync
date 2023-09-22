const client = require("../../mongodb_connection/mongoDBConnection");

const exPrincipalCollection = client.db("teachers").collection("ex_principal");

const getExPrincipal = async (req, res) => {
  const cursor = exPrincipalCollection.find();
  const exPrincipalData = await cursor.toArray();
  console.log(exPrincipalData);
  res.send(exPrincipalData);
};

module.exports = getExPrincipal;
