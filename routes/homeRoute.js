const express = require("express");
const router = express.Router();

const { homeMessage } = require("../controllers/homeController");

router.get("/", homeMessage);

module.exports = router;
