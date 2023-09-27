const { ObjectId } = require("mongodb");
const {
  studentInfoCollection6,
  studentInfoCollection7,
  studentInfoCollection8,
  studentInfoCollection9,
  studentInfoCollection10,
} = require("../../collections/students/StudentsCollection");

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
