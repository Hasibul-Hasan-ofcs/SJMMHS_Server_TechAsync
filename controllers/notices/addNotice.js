const {
  noticeCollection,
} = require("../../collections/notices/NoticeCollection");

const addNotice = (req, res) => {
  const data = {
    date: req.body.date,
    notice: req.body.notice,
  };

  const result = noticeCollection.insertOne(data);

  res.status(200).json(result);
};

module.exports = addNotice;
