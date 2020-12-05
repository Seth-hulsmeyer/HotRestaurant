const router = require("express").Router();
const path = require("path");

// get home
router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/home.html"))
);

//get for tables.html
router.get("/tables", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/tables.html"))
);

//get for reserve.html
router.get("/reserve", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/reserve.html"))
);

module.exports = router;
