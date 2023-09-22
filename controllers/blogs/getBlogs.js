const client = require("../../mongodb_connection/mongoDBConnection");

const BlogsCollection = client.db("main").collection("blog");

const getBlogs = async (req, res) => {
  const cursor = BlogsCollection.find();
  const BlogsData = await cursor.toArray();
  console.log(BlogsData);
  res.send(BlogsData);
};

module.exports = getBlogs;
