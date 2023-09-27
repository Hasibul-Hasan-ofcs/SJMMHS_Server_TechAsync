const BlogsCollection = require("../../collections/Blogs/BlogsCollection");

const getBlogs = async (req, res) => {
  const cursor = BlogsCollection.find();
  const BlogsData = await cursor.toArray();
  console.log(BlogsData);
  res.send(BlogsData);
};

module.exports = getBlogs;
