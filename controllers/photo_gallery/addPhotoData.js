const photoCollection = require("../../collections/photos/PhotosCollection");

const addPhotoData = (req, res) => {
  const data = {
    main_image_url: req.body.main_image_url,
    other_images: req.body.other_images,
    context: req.body.context,
  };

  const result = photoCollection.insertOne(data);

  res.status(200).json(result);
};

module.exports = addPhotoData;
