const { ObjectId } = require("mongodb");
const videoCollection = require("../../collections/videos/VideoCollection");

const deleteVideo = (req, res) => {
  const id = req.params.id;

  const query = {
    _id: new ObjectId(id),
  };

  const result = videoCollection.deleteOne(query);

  res.send(result);
};

module.exports = deleteVideo;
