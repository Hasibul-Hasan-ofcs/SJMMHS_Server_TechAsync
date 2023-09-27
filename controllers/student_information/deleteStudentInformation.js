const { ObjectId } = require("mongodb");
const {
  studentInfoCollection6,
  studentInfoCollection7,
  studentInfoCollection8,
  studentInfoCollection9,
  studentInfoCollection10,
} = require("../../collections/students/StudentsCollection");

const deleteStudentInformation = async (req, res) => {
  const classNo = req.params.value;
  const id = req.params.id;
  let result;

  console.log(classNo, id);

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

  console.log(result);
  res.send(result);
};

module.exports = deleteStudentInformation;
