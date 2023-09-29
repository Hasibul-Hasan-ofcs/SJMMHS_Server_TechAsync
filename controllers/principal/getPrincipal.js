const principalCollection = require("../../collections/principal/PrincipalCollection");

const getPrincipal = async (req, res) => {
  const cursor = principalCollection.find();
  const principalData = await cursor.toArray();
  console.log(principalData);
  res.send(principalData);
};

module.exports = getPrincipal;
