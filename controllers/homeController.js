const homeMessage = (req, res) => {
  res.json({
    message:
      "If we were to use modules , we would have to do double work to get shit working! Also it doesn't work well with refreshes!",
  });
};

module.exports = { homeMessage };
