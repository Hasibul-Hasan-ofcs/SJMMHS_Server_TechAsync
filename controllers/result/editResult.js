const { ObjectId } = require("mongodb");
const {
  resultCollection6,
  resultCollection7,
  resultCollection8,
  resultCollection9,
  resultCollection10,
} = require("../../collections/result/ResultCollection");

const editResult = async (req, res) => {
  const classNo = req.params.value;
  const id = req.params.id;
  const studentName = req.body.name;
  const studentRegE = req.body.rege;
  const studentRegB = req.body.regb;
  const studentResult = req.body.result;

  let result;

  console.log(
    classNo,
    id,
    studentName,
    studentRegE,
    studentRegB,
    studentResult
  );

  const filter = { _id: new ObjectId(id) };
  const update = {
    $set: {
      name: studentName,
      rege: studentRegE,
      regb: studentRegB,
      result: studentResult,
    },
  };

  if (classNo == "6") {
    result = await resultCollection6.updateOne(filter, update);
  } else if (classNo == "7") {
    result = await resultCollection7.updateOne(filter, update);
  } else if (classNo == "8") {
    result = await resultCollection8.updateOne(filter, update);
  } else if (classNo == "9") {
    result = await resultCollection9.updateOne(filter, update);
  } else if (classNo == "10") {
    result = await resultCollection10.updateOne(filter, update);
  }

  console.log(result);
  res.send(result);
};

module.exports = editResult;
