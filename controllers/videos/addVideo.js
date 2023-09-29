const videoCollection = require("../../collections/videos/VideoCollection");

const addVideoData = (req, res) => {
  const data = {
    video_url: req.body.video_url,
    context: req.body.context,
  };

  const result = videoCollection.insertOne(data);

  res.status(200).json(result);
};

module.exports = addVideoData;
