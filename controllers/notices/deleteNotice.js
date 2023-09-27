const { ObjectId } = require("mongodb");
const {
  noticeCollection,
} = require("../../collections/notices/NoticeCollection");

const deleteNotice = (req, res) => {
  const id = req.params.id;

  const query = {
    _id: new ObjectId(id),
  };

  const result = noticeCollection.deleteOne(query);

  res.send(result);
};

module.exports = deleteNotice;
