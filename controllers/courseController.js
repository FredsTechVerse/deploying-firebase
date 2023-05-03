const Course = require("../models/CourseModel");

const findAllCourses = async (req, res) => {
  // All the data will already be appended by the units.
  try {
    let data = await Course.find({}); //Find everything for me.
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { findAllCourses };
