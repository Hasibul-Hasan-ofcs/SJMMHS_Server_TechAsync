const client = require("../../mongodb_connection/mongoDBConnection");

const photoCollection = client.db("main").collection("images");

const getPhotoGallery = async (req, res) => {
  const cursor = photoCollection.find();
  const photoData = await cursor.toArray();
  console.log(photoData);
  res.send(photoData);
};

module.exports = getPhotoGallery;
