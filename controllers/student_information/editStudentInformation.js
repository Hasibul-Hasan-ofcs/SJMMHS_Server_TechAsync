const { ObjectId } = require("mongodb");
const client = require("../../mongodb_connection/mongoDBConnection");

const studentInfoCollection6 = client.db("students").collection("class6");
const studentInfoCollection7 = client.db("students").collection("class7");
const studentInfoCollection8 = client.db("students").collection("class8");
const studentInfoCollection9 = client.db("students").collection("class9");
const studentInfoCollection10 = client.db("students").collection("class10");

const editStudentInformation = async (req, res) => {
  const classNo = req.params.value;
  const id = req.params.id;
  const studentName = req.body.name;
  const studentReg = req.body.reg;

  let result;

  console.log(classNo, id, studentName, studentReg);

  const filter = { _id: new ObjectId(id) };
  const update = { $set: { name: studentName, reg: studentReg } };

  if (classNo == "6") {
    result = await studentInfoCollection6.updateOne(filter, update);
  } else if (classNo == "7") {
    result = await studentInfoCollection7.updateOne(filter, update);
  } else if (classNo == "8") {
    result = await studentInfoCollection8.updateOne(filter, update);
  } else if (classNo == "9") {
    result = await studentInfoCollection9.updateOne(filter, update);
  } else if (classNo == "10") {
    result = await studentInfoCollection10.updateOne(filter, update);
  }

  console.log(result);
  res.send(result);
};

module.exports = editStudentInformation;
