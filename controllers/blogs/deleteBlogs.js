const { ObjectId } = require("mongodb");
const BlogsCollection = require("../../collections/Blogs/BlogsCollection");

const deleteBlogs = (req, res) => {
  const id = req.params.id;

  const query = {
    _id: new ObjectId(id),
  };

  const result = BlogsCollection.deleteOne(query);

  res.send(result);
};

module.exports = deleteBlogs;
