const examRoutineCollection = require("../../collections/exam_routine/ExamRoutineCollection");

const getExamRoutine = async (req, res) => {
  const cursor = examRoutineCollection.find();
  const routineData = await cursor.toArray();
  console.log(routineData);
  res.send(routineData);
};

module.exports = getExamRoutine;
