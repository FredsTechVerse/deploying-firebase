const express = require("express");
const router = express.Router();
require("dotenv/config");

const { findAllCourses } = require("../controllers/courseController");
router.get("/allCourses", findAllCourses);

module.exports = router;
