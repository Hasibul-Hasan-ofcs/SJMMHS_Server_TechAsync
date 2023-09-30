const jwt = require("jsonwebtoken");

const createJWT = (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  console.log("hitting", token);
  res.send({ token });
};

module.exports = createJWT;
