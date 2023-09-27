const {
  studentInfoCollection6,
  studentInfoCollection7,
  studentInfoCollection8,
  studentInfoCollection9,
  studentInfoCollection10,
} = require("../../collections/students/StudentsCollection");

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
