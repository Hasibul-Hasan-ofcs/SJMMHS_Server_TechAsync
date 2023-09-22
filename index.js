const express = require("express");
const cors = require("cors");
require("dotenv").config();
const base = require("./controllers/base/BaseController");
const getHolidays = require("./controllers/holidays/getHolidays");
const getNotices = require("./controllers/notices/getNotices");
const getNumberOfRooms = require("./controllers/no_of_rooms/getNumberOfRooms");
const getNumberOfSeats = require("./controllers/no_of_seats/getNumberOfSeats");
const colors = require("colors");
const client = require("./mongodb_connection/mongoDBConnection");
const getStudentInformation = require("./controllers/student_information/getStudentInformation");
const getResults = require("./controllers/result/getResult");
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
    app.route("/notices").get(getNotices);
    app.route("/holidays").get(getHolidays);
    app.route("/no-of-rooms").get(getNumberOfRooms);
    app.route("/no-of-seats").get(getNumberOfSeats);
    app.route("/circular").get(getCirculars);
    app.route("/sahapath").get(getSahapath);
    app.route("/computer-usage").get(getComputerUsage);
    app.route("/physical-structure").get(getPhysicalStructure);
    app.route("/multimedia-classroom").get(getMultimediaClassroom);
    app.route("/blogs").get(getBlogs);

    // {STUDENT DATA ROUTES}
    app.route("/student-info/:value").get(getStudentInformation);
    app.route("/result/:classvalue/:reg").get(getResults);
    app.route("/successful-students").get(getSuccessfulStudents);

    // {STUDENT DATA DELETE}
    app.route("/student-info/:value/:id").get(deleteStudentInformation);

    // {AUTHORITY}
    app.route("/principal").get(getPrincipal);
    app.route("/ex-principal").get(getExPrincipal);
    app.route("/teachers").get(getTeachers);
    app.route("/management").get(getManagement);
    app.route("/staff").get(getStaff);

    // {GALLERY}
    app.route("/photo-gallery").get(getPhotoGallery);
    app.route("/photo-gallery/:id").get(getPhotoGalleryById);

    // {ROUTINE}
    app.route("/exam-routine").get(getExamRoutine);
  } finally {
    console.log("reached finally block");
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
