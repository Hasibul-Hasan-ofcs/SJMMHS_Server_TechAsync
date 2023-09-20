const express = require("express");
const cors = require("cors");
require("dotenv").config();
const base = require("./controllers/base/BaseController");
const getHolidays = require("./controllers/holidays/getHolidays");
const getNumberOfRooms = require("./controllers/no_of_rooms/getNumberOfRooms");
const getNumberOfSeats = require("./controllers/no_of_seats/getNumberOfSeats");
const colors = require("colors");
const client = require("./mongodb_connection/mongoDBConnection");

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
    app.route("/holidays").get(getHolidays);
    app.route("/no-of-rooms").get(getNumberOfRooms);
    app.route("/no-of-seats").get(getNumberOfSeats);
  } finally {
    console.log("reached finally block");
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
