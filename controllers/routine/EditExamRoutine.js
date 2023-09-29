const { ObjectId } = require("mongodb");
const examRoutineCollection = require("../../collections/exam_routine/ExamRoutineCollection");

const editExamRoutine = async (req, res) => {
  const id = req.params.id;
  const classNo = req.body.class;
  const routinedownloadurl = req.body.downloadurl;

  console.log(classNo, id, routinedownloadurl);

  const filter = { _id: new ObjectId(id) };
  const update = { $set: { class: classNo, downloadurl: routinedownloadurl } };

  const result = await examRoutineCollection.updateOne(filter, update);

  console.log(result);
  res.send(result);
};

module.exports = editExamRoutine;
