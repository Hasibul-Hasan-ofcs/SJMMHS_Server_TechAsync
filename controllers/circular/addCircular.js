const {
  circularCollection,
} = require("../../collections/circular/CircularCollection");

const addCircular = (req, res) => {
  const data = {
    Position: req.body.Position,
    School: req.body.School,
    Location: req.body.Location,
    Description: req.body.Description,
  };

  const result = circularCollection.insertOne(data);

  res.status(200).json(result);
};

module.exports = addCircular;
