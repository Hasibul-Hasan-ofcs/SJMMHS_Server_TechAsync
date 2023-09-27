const {
  resultCollection10,
} = require("../../collections/result/ResultCollection");

const addResult = (req, res) => {
  const data = {
    name: req.body.name,
    regb: req.body.regb,
    rege: req.body.rege,
    result: req.body.result,
  };

  const result = resultCollection10.insertOne(data);

  res.status(200).json(result);
};

module.exports = addResult;
