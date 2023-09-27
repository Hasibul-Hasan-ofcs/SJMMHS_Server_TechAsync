const {
  resultCollection6,
  resultCollection7,
  resultCollection8,
  resultCollection9,
  resultCollection10,
} = require("../../collections/result/ResultCollection");

const getResultById = async (req, res) => {
  const { classvalue, reg } = req.params;
  console.log(classvalue, reg);
  const query = {
    rege: reg,
  };
  let cursor;
  if (classvalue == "6") {
    cursor = resultCollection6.find(query);
  } else if (classvalue == "7") {
    cursor = resultCollection7.find(query);
  } else if (classvalue == "8") {
    cursor = resultCollection8.find(query);
  } else if (classvalue == "9") {
    cursor = resultCollection9.find(query);
  } else if (classvalue == "10") {
    cursor = resultCollection10.find(query);
  }
  const resultData = await cursor.toArray();
  console.log(resultData);
  res.send(resultData);
};

module.exports = getResultById;
