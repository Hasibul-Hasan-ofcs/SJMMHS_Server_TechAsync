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
const createJWT = require("./jwt/createJWT");
const verifyJWT = require("./jwt/verifyJWT");

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

    // {JSON WEB TOKEN}
    app.route("/jwt").post(createJWT);

    // {BASE ROUTE}
    app.route("/").get(base);

    // {SCHOOL RELATED ROUTES}

    // {NOTICES}
    app.get("/notices", getNotices);
    app.post("/notices", verifyJWT, addNotice);
    app.delete("/notices/:id", verifyJWT, deleteNotice);

    app.route("/sahapath").get(getSahapath);
    app.route("/computer-usage").get(getComputerUsage);
    app.route("/physical-structure").get(getPhysicalStructure);
    app.route("/multimedia-classroom").get(getMultimediaClassroom);

    // {BLOGS}
    app.route("/blogs").get(getBlogs);
    app.post("/blogs", verifyJWT, addBlogs);
    app.delete("/blogs/:id", verifyJWT, deleteBlogs);

    // {HOLIDAYS}
    app.route("/holidays").get(getHolidays);
    app.post("/holidays", verifyJWT, addHolidays);
    app.delete("/holidays/:id", verifyJWT, deleteHolidays);

    // {CIRCULAR}
    app.route("/circular").get(getCirculars);
    app.post("/circular", verifyJWT, addCircular);
    app.delete("/circular/:id", verifyJWT, deleteCircular);

    // {No OF ROOMS}
    app.route("/no-of-rooms").get(getNumberOfRooms);
    app.post("/no-of-rooms", verifyJWT, addNumberOfRooms);
    app.delete("/no-of-rooms/:id", verifyJWT, deleteNumberOfRooms);

    // {NO OF SEATS}
    app.route("/no-of-seats").get(getNumberOfSeats);
    app.post("/no-of-seats", verifyJWT, addNoOfSeats);
    app.delete("/no-of-seats/:id", verifyJWT, deleteNoOfSeats);

    // {RESULT}
    app.route("/result/:classvalue/:reg").get(getResultById);
    app.route("/result/:value").get(getResult);
    app.post("/result/:value", verifyJWT, addResult);
    app.delete("/result/:value/:id", verifyJWT, deleteResult);
    app.patch("/result/:value/:id", verifyJWT, editResult);

    // {SUCCESSFUL STUDENTS}
    app.route("/successful-students").get(getSuccessfulStudents);
    app.post("/successful-students", verifyJWT, addSuccessfulStudents);
    app.delete("/successful-students/:id", verifyJWT, deleteSuccessfulStudents);

    // {STUDENT DATA ROUTES}
    app.route("/student-info/:value").get(getStudentInformation);
    app.post("/student-info/:value", verifyJWT, addStudentInformation);
    app.delete("/student-info/:value/:id", verifyJWT, deleteStudentInformation);
    app.patch("/student-info/:value/:id", verifyJWT, editStudentInformation);

    // {AUTHORITY}
    app.route("/principal").get(getPrincipal);
    app.patch("/principal/:id", verifyJWT, editPrincipal);

    app.route("/ex-principal").get(getExPrincipal);
    app.patch("/ex-principal/:id", verifyJWT, editExPrincipal);

    // {TEACHERS}
    app.route("/teachers").get(getTeachers);
    app.post("/teachers", verifyJWT, addTeachers);
    app.delete("/teachers/:id", verifyJWT, deleteTeachers);

    // {MANAGEMENT}
    app.route("/management").get(getManagement);
    app.post("/management", verifyJWT, addManagement);
    app.delete("/management/:id", verifyJWT, deleteManagement);

    // {STAFFS}
    app.route("/staff").get(getStaff);
    app.post("/staff", verifyJWT, addStaff);
    app.delete("/staff/:id", verifyJWT, deleteStaff);

    // {GALLERY}
    app.route("/photo-gallery").get(getPhotoGallery);
    app.post("/photo-gallery", verifyJWT, addPhotoData);
    app.route("/photo-gallery/:id").get(getPhotoGalleryById);
    app.delete("/photo-gallery/:id", verifyJWT, deletePhotoData);

    app.route("/video-gallery").get(getVideos);
    app.post("/video-gallery", verifyJWT, addVideoData);
    app.delete("/video-gallery/:id", verifyJWT, deleteVideo);

    // {ROUTINE}
    app.route("/exam-routine").get(getExamRoutine);
    app.patch("/exam-routine/:id", verifyJWT, editExamRoutine);
  } finally {
    console.log("reached finally block");
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
