const { ObjectId } = require("mongodb");
const photoCollection = require("../../collections/photos/PhotosCollection");

const getPhotoGalleryById = async (req, res) => {
  const id = req.params.id;
  const query = {
    _id: new ObjectId(id),
  };

  console.log(id);
  const cursor = photoCollection.find(query);
  const photoData = await cursor.toArray();
  console.log(photoData);
  res.send(photoData);
};

module.exports = getPhotoGalleryById;
