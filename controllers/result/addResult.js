const {
  resultCollection10,
  resultCollection6,
  resultCollection7,
  resultCollection8,
  resultCollection9,
} = require("../../collections/result/ResultCollection");

const addResult = (req, res) => {
  const classNo = req.params.value;
  const data = {
    name: req.body.name,
    regb: req.body.regb,
    rege: req.body.rege,
    result: req.body.result,
  };

  let result;
  if (classNo == "6") {
    result = resultCollection6.insertOne(data);
  } else if (classNo == "7") {
    result = resultCollection7.insertOne(data);
  } else if (classNo == "8") {
    result = resultCollection8.insertOne(data);
  } else if (classNo == "9") {
    result = resultCollection9.insertOne(data);
  } else if (classNo == "10") {
    result = resultCollection10.insertOne(data);
  }

  res.status(200).json(result);
};

module.exports = addResult;
