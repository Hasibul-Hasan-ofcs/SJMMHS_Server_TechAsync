const {
  noticeCollection,
} = require("../../collections/notices/NoticeCollection");

const getNotices = async (req, res) => {
  const cursor = noticeCollection.find();
  const noticeData = await cursor.toArray();
  console.log(noticeData);
  res.send(noticeData);
};

module.exports = getNotices;
