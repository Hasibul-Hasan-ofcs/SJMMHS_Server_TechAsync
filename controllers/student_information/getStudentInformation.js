const {
  studentInfoCollection6,
  studentInfoCollection7,
  studentInfoCollection8,
  studentInfoCollection9,
  studentInfoCollection10,
} = require("../../collections/students/StudentsCollection");

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
