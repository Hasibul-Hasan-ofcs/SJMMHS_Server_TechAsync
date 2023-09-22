const client = require("../../mongodb_connection/mongoDBConnection");

const studentInfoCollection6 = client.db("students").collection("class6");
const studentInfoCollection7 = client.db("students").collection("class7");
const studentInfoCollection8 = client.db("students").collection("class8");
const studentInfoCollection9 = client.db("students").collection("class9");
const studentInfoCollection10 = client.db("students").collection("class10");

const deleteStudentInformation = async (req, res) => {
  const classNo = req.params.value;
  const id = req.params.id;
  let result;

  const filter = { _id: new ObjectId(id) };

  if (classNo == "6") {
    result = await studentInfoCollection6.deleteOne(filter);
  } else if (classNo == "7") {
    result = await studentInfoCollection7.deleteOne(filter);
  } else if (classNo == "8") {
    result = await studentInfoCollection8.deleteOne(filter);
  } else if (classNo == "9") {
    result = await studentInfoCollection9.deleteOne(filter);
  } else if (classNo == "10") {
    result = await studentInfoCollection10.deleteOne(filter);
  }

  res.send(result);
};

module.exports = deleteStudentInformation;
