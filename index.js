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

    // {STUDENT DATA ROUTES}
    app.route("/student-info/:value").get(getStudentInformation);
    app.route("/result/:classvalue/:reg").get(getResults);

    // {AUTHORITY}
    app.route("/principal").get(getPrincipal);
    app.route("/teachers").get(getTeachers);
  } finally {
    console.log("reached finally block");
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
