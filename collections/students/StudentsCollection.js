const client = require("../../mongodb_connection/mongoDBConnection");

const studentInfoCollection6 = client.db("students").collection("class6");
const studentInfoCollection7 = client.db("students").collection("class7");
const studentInfoCollection8 = client.db("students").collection("class8");
const studentInfoCollection9 = client.db("students").collection("class9");
const studentInfoCollection10 = client.db("students").collection("class10");

module.exports = {
  studentInfoCollection6,
  studentInfoCollection7,
  studentInfoCollection8,
  studentInfoCollection9,
  studentInfoCollection10,
};
