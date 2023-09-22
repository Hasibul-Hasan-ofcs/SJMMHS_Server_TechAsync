const client = require("../../mongodb_connection/mongoDBConnection");

const multimediaClassroomCollection = client
  .db("main")
  .collection("multimedia");

const getMultimediaClassroom = async (req, res) => {
  const cursor = multimediaClassroomCollection.find();
  const multimediaClassroomData = await cursor.toArray();
  console.log(multimediaClassroomData);
  res.send(multimediaClassroomData);
};

module.exports = getMultimediaClassroom;
