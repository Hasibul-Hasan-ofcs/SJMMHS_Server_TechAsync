const BlogsCollection = require("../../collections/Blogs/BlogsCollection");

const addBlogs = (req, res) => {
  const data = {
    title: req.body.title,
    content: req.body.content,
  };

  const result = BlogsCollection.insertOne(data);

  res.status(200).json(result);
};

module.exports = addBlogs;
