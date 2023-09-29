const videoCollection = require("../../collections/videos/VideoCollection");

const getVideos = async (req, res) => {
  const cursor = videoCollection.find();
  const routineData = await cursor.toArray();
  console.log(routineData);
  res.send(routineData);
};

module.exports = getVideos;
