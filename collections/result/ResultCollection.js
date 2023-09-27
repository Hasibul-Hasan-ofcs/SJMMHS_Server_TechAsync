const client = require("../../mongodb_connection/mongoDBConnection");

const resultCollection6 = client.db("result").collection("class6");
const resultCollection7 = client.db("result").collection("class7");
const resultCollection8 = client.db("result").collection("class8");
const resultCollection9 = client.db("result").collection("class9");
const resultCollection10 = client.db("result").collection("class10");

module.exports = {
  resultCollection6,
  resultCollection7,
  resultCollection8,
  resultCollection9,
  resultCollection10,
};
