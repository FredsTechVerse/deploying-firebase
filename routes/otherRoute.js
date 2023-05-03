const express = require("express");
const router = express.Router();

const {
  otherMessage,
  jsonMessage,
} = require("../controllers/otherController.js");
router.get("/", otherMessage);
router.get("/json", jsonMessage);

module.exports = router;
