const otherMessage = (req, res) => {
  res.send("This is a message being sent from the other route.");
};

const jsonMessage = (req, res) => {
  res.json({
    message:
      "This is a message being sent from the other route in JSON flavour",
  });
};

module.exports = { otherMessage, jsonMessage };
