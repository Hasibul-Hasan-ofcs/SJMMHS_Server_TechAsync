const client = require("../../mongodb_connection/mongoDBConnection");

const noticeCollection = client.db("main").collection("notice");

const getNotices = async (req, res) => {
  const cursor = noticeCollection.find();
  const noticeData = await cursor.toArray();
  console.log(noticeData);
  res.send(noticeData);
};

module.exports = getNotices;
