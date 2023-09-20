const base = (req, res) => {
  res.status(200).json({
    note: "welcome to the server side of SJMMHS webapp",
  });
};

module.exports = base;
