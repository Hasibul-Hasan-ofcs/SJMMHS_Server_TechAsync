const express = require("express");
const cors = require("cors");
require("dotenv").config();
const colors = require("colors");
const client = require("./mongodb_connection/mongoDBConnection");
const base = require("./controllers/base/BaseController");
const getHolidays = require("./controllers/holidays/getHolidays");
const getNotices = require("./controllers/notices/getNotices");
const getNumberOfRooms = require("./controllers/no_of_rooms/getNumberOfRooms");
const getNumberOfSeats = require("./controllers/no_of_seats/getNumberOfSeats");
const getStudentInformation = require("./controllers/student_information/getStudentInformation");
const getResultById = require("./controllers/result/getResultById");
const getCirculars = require("./controllers/circular/getCircular");
const getSahapath = require("./controllers/sahapath/getShahapath");
const getComputerUsage = require("./controllers/computer_usage/getComputerUsage");
const getPhysicalStructure = require("./controllers/physical_structure/getPhysicalStructure");
const getPrincipal = require("./controllers/principal/getPrincipal");
const getTeachers = require("./controllers/teachers/getTeachers");
const getManagement = require("./controllers/management/getManagement");
const getStaff = require("./controllers/staff/getStaff");
const getExPrincipal = require("./controllers/ex_principal/getExPrincipal");
const getSuccessfulStudents = require("./controllers/successful_students/getSuccessfulStudents");
const getPhotoGallery = require("./controllers/photo_gallery/getPhotoGallery");
const getMultimediaClassroom = require("./controllers/multimedia_classroom/getMultimediaClassroom");
const getBlogs = require("./controllers/blogs/getBlogs");
const getPhotoGalleryById = require("./controllers/photo_gallery/getPhotoGalleryByID");
const getExamRoutine = require("./controllers/routine/getExamRoutine");
const deleteStudentInformation = require("./controllers/student_information/deleteStudentInformation");
const editStudentInformation = require("./controllers/student_information/editStudentInformation");
const addStudentInformation = require("./controllers/student_information/addStudentInformation");
const addHolidays = require("./controllers/holidays/addHolidays");
const deleteHolidays = require("./controllers/holidays/deleteHolidays");
const addNumberOfRooms = require("./controllers/no_of_rooms/addNoOfRooms");
const deleteNumberOfRooms = require("./controllers/no_of_rooms/deleteNoOfRooms");
const addCircular = require("./controllers/circular/addCircular");
const deleteCircular = require("./controllers/circular/deleteCircular");
const addNoOfSeats = require("./controllers/no_of_seats/addNoOfSeats");
const deleteNoOfSeats = require("./controllers/no_of_seats/deleteNoOfSeats");
const addNotice = require("./controllers/notices/addNotice");
const deleteNotice = require("./controllers/notices/deleteNotice");
const addStaff = require("./controllers/staff/addStaff");
const deleteStaff = require("./controllers/staff/deleteStaff");
const addManagement = require("./controllers/management/addManagement");
const deleteManagement = require("./controllers/management/deleteManagement");
const deleteTeachers = require("./controllers/teachers/deleteTeachers");
const addTeachers = require("./controllers/teachers/addTeachers");
const addSuccessfulStudents = require("./controllers/successful_students/addSuccessfulStudents");
const deleteSuccessfulStudents = require("./controllers/successful_students/deleteSuccessfulStudents");
const addBlogs = require("./controllers/blogs/addBlogs");
const deleteBlogs = require("./controllers/blogs/deleteBlogs");
const getResult = require("./controllers/result/getResult");
const addResult = require("./controllers/result/addResult");
const deleteResult = require("./controllers/result/deleteResult");
const editResult = require("./controllers/result/editResult");
const deletePhotoData = require("./controllers/photo_gallery/deletePhotoData");
const addPhotoData = require("./controllers/photo_gallery/addPhotoData");
const editExamRoutine = require("./controllers/routine/EditExamRoutine");
const getVideos = require("./controllers/videos/getVideos");
const deleteVideo = require("./controllers/videos/deleteVideo");
const addVideoData = require("./controllers/videos/addVideo");
const editPrincipal = require("./controllers/principal/editPrincipal");
const editExPrincipal = require("./controllers/ex_principal/editExPrincipal");

// initializing express app
const app = express();

// Environment Variables
const port = process.env.PORT;

// middlewares
app.use(express.json());
app.use(cors());

async function run() {
  try {
    console.log(
      `Pinged your deployment. You successfully connected to MongoDB Database! - ${client.s.options.srvHost}`
        .blue.bgWhite
    );

    // route definition
    // {BASE ROUTE}
    app.route("/").get(base);

    // {SCHOOL RELATED ROUTES}

    // {NOTICES}
    app.route("/notices").get(getNotices).post(addNotice);
    app.route("/notices/:id").delete(deleteNotice);

    app.route("/sahapath").get(getSahapath);
    app.route("/computer-usage").get(getComputerUsage);
    app.route("/physical-structure").get(getPhysicalStructure);
    app.route("/multimedia-classroom").get(getMultimediaClassroom);

    // {BLOGS}
    app.route("/blogs").get(getBlogs).post(addBlogs);
    app.route("/blogs/:id").delete(deleteBlogs);

    // {HOLIDAYS}
    app.route("/holidays").get(getHolidays).post(addHolidays);
    app.route("/holidays/:id").delete(deleteHolidays);

    // {CIRCULAR}
    app.route("/circular").get(getCirculars).post(addCircular);
    app.route("/circular/:id").delete(deleteCircular);

    // {No OF ROOMS}
    app.route("/no-of-rooms").get(getNumberOfRooms).post(addNumberOfRooms);
    app.route("/no-of-rooms/:id").delete(deleteNumberOfRooms);

    // {NO OF SEATS}
    app.route("/no-of-seats").get(getNumberOfSeats).post(addNoOfSeats);
    app.route("/no-of-seats/:id").delete(deleteNoOfSeats);
    // {RESULT}
    app.route("/result/:classvalue/:reg").get(getResultById);
    app.route("/result/:value").get(getResult).post(addResult);
    app.route("/result/:value/:id").delete(deleteResult);
    app.route("/result/:value/:id").patch(editResult);

    // {SUCCESSFUL STUDENTS}
    app
      .route("/successful-students")
      .get(getSuccessfulStudents)
      .post(addSuccessfulStudents);
    app.route("/successful-students/:id").delete(deleteSuccessfulStudents);

    // {STUDENT DATA ROUTES}
    app
      .route("/student-info/:value")
      .get(getStudentInformation)
      .post(addStudentInformation);
    app
      .route("/student-info/:value/:id")
      .delete(deleteStudentInformation)
      .patch(editStudentInformation);

    // {AUTHORITY}
    app.route("/principal").get(getPrincipal);
    app.route("/principal/:id").patch(editPrincipal);

    app.route("/ex-principal").get(getExPrincipal);
    app.route("/ex-principal/:id").patch(editExPrincipal);

    // {TEACHERS}
    app.route("/teachers").get(getTeachers).post(addTeachers);
    app.route("/teachers/:id").delete(deleteTeachers);

    // {MANAGEMENT}
    app.route("/management").get(getManagement).post(addManagement);
    app.route("/management/:id").delete(deleteManagement);

    // {STAFFS}
    app.route("/staff").get(getStaff).post(addStaff);
    app.route("/staff/:id").delete(deleteStaff);

    // {GALLERY}
    app.route("/photo-gallery").get(getPhotoGallery).post(addPhotoData);
    app
      .route("/photo-gallery/:id")
      .get(getPhotoGalleryById)
      .delete(deletePhotoData);

    app.route("/video-gallery").get(getVideos).post(addVideoData);
    app.route("/video-gallery/:id").delete(deleteVideo);

    // {ROUTINE}
    app.route("/exam-routine").get(getExamRoutine);
    app.route("/exam-routine/:id").patch(editExamRoutine);
  } finally {
    console.log("reached finally block");
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
