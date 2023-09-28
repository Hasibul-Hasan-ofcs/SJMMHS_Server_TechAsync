const {
  resultCollection6,
  resultCollection7,
  resultCollection8,
  resultCollection9,
  resultCollection10,
} = require("../../collections/result/ResultCollection");

const getResult = async (req, res) => {
  const classNo = req.params.value;

  // console.log(classNo);

  let cursor;
  if (classNo == "6") {
    cursor = resultCollection6.find();
  } else if (classNo == "7") {
    cursor = resultCollection7.find();
  } else if (classNo == "8") {
    cursor = resultCollection8.find();
  } else if (classNo == "9") {
    cursor = resultCollection9.find();
  } else if (classNo == "10") {
    cursor = resultCollection10.find();
  }

  const resultData = await cursor.toArray();

  res.send(resultData);
};

module.exports = getResult;
