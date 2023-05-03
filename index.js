// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started
const functions = require("firebase-functions");
const express = require("express");
const homeRoute = require("./routes/homeRoute");
const otherRoute = require("./routes/otherRoute");
const app = express();

app.use("/", homeRoute);
app.use("/other", otherRoute);

app.listen(3000, () => console.log("Server running on port 3000"));
exports.app = functions.https.onRequest(app);
