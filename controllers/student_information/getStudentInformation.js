const client = require("../../mongodb_connection/mongoDBConnection");

const studentInfoCollection6 = client.db("students").collection("class6");
const studentInfoCollection7 = client.db("students").collection("class7");
const studentInfoCollection8 = client.db("students").collection("class8");
const studentInfoCollection9 = client.db("students").collection("class9");
const studentInfoCollection10 = client.db("students").collection("class10");

const getStudentInformation = async (req, res) => {
  const classNo = req.params.value;
  let cursor;
  if (classNo == "6") {
    cursor = studentInfoCollection6.find();
  } else if (classNo == "7") {
    cursor = studentInfoCollection7.find();
  } else if (classNo == "8") {
    cursor = studentInfoCollection8.find();
  } else if (classNo == "9") {
    cursor = studentInfoCollection9.find();
  } else if (classNo == "10") {
    cursor = studentInfoCollection10.find();
  }

  const studentInfoData = await cursor.toArray();
  console.log(studentInfoData);
  res.send(studentInfoData);
};

module.exports = getStudentInformation;
