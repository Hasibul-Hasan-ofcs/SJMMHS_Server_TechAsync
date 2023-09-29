const photoCollection = require("../../collections/photos/PhotosCollection");

const getPhotoGallery = async (req, res) => {
  const cursor = photoCollection.find();
  const photoData = await cursor.toArray();
  console.log(photoData);
  res.send(photoData);
};

module.exports = getPhotoGallery;
