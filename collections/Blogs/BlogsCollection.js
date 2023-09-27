const client = require("../../mongodb_connection/mongoDBConnection");

const BlogsCollection = client.db("main").collection("blog");

module.exports = BlogsCollection;
