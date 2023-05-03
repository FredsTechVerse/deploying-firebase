// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const homeRoute = require("./routes/homeRoute");
const otherRoute = require("./routes/otherRoute");
const courseRoute = require("./routes/courseRoute");
const app = express();

require("dotenv").config();

//DATABASE CONNECTIONS.
// CONNECTION TO DATABASE,
//========================
console.log(process.env.DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// CONNECTION TEST
//=================
const db = mongoose.connection;
// CONNECTION ERROR HANDLING
db.on("open", function (ref) {
  connected = true;
  console.log("open connection to mongo server.");
});

db.on("connected", function (ref) {
  connected = true;
  console.log("connected to mongo server.");
});

//MIDDLEWARE CONFIGURATION
//========================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", homeRoute);
app.use("/other", otherRoute);
app.use("/course", courseRoute);

app.listen(3000, () => console.log("Server running on port 3000"));
exports.app = functions.https.onRequest(app);
