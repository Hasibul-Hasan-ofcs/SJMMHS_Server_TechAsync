const { ObjectId } = require("mongodb");
const photoCollection = require("../../collections/photos/PhotosCollection");

const deletePhotoData = (req, res) => {
  const id = req.params.id;

  const query = {
    _id: new ObjectId(id),
  };

  const result = photoCollection.deleteOne(query);

  res.send(result);
};

module.exports = deletePhotoData;
