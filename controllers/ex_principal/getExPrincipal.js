const exPrincipalCollection = require("../../collections/ex_principal/ExPrincipalCollection");

const getExPrincipal = async (req, res) => {
  const cursor = exPrincipalCollection.find();
  const exPrincipalData = await cursor.toArray();
  console.log(exPrincipalData);
  res.send(exPrincipalData);
};

module.exports = getExPrincipal;
