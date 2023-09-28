const { ObjectId } = require("mongodb");
const {
  resultCollection6,
  resultCollection7,
  resultCollection8,
  resultCollection9,
  resultCollection10,
} = require("../../collections/result/ResultCollection");

const deleteResult = async (req, res) => {
  const classNo = req.params.value;
  const id = req.params.id;
  let result;

  console.log(classNo, id);

  const filter = { _id: new ObjectId(id) };

  if (classNo == "6") {
    result = await resultCollection6.deleteOne(filter);
  } else if (classNo == "7") {
    result = await resultCollection7.deleteOne(filter);
  } else if (classNo == "8") {
    result = await resultCollection8.deleteOne(filter);
  } else if (classNo == "9") {
    result = await resultCollection9.deleteOne(filter);
  } else if (classNo == "10") {
    result = await resultCollection10.deleteOne(filter);
  }

  console.log(result);
  res.send(result);
};

module.exports = deleteResult;
