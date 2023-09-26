const client = require("../../mongodb_connection/mongoDBConnection");

const studentInfoCollection6 = client.db("students").collection("class6");
const studentInfoCollection7 = client.db("students").collection("class7");
const studentInfoCollection8 = client.db("students").collection("class8");
const studentInfoCollection9 = client.db("students").collection("class9");
const studentInfoCollection10 = client.db("students").collection("class10");

const addStudentInformation = async (req, res) => {
  const classNo = req.params.value;
  const studentName = req.body.name;
  const studentReg = req.body.reg;

  let result;

  console.log(classNo, studentName, studentReg);

  const document = { name: studentName, reg: studentReg };

  if (classNo == "6") {
    result = await studentInfoCollection6.insertOne(document);
  } else if (classNo == "7") {
    result = await studentInfoCollection7.insertOne(document);
  } else if (classNo == "8") {
    result = await studentInfoCollection8.insertOne(document);
  } else if (classNo == "9") {
    result = await studentInfoCollection9.insertOne(document);
  } else if (classNo == "10") {
    result = await studentInfoCollection10.insertOne(document);
  }

  console.log(result);
  res.send(result);
};

module.exports = addStudentInformation;
