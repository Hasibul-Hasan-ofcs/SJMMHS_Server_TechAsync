const client = require("../../mongodb_connection/mongoDBConnection");

const noticeCollection = client.db("main").collection("notice");

module.exports = { noticeCollection };
