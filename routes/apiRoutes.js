const router = require("express").Router();

// Data For table reservation (ARRAY of Objects)
let tableInfo = [];
let waitList = [];
//GET / POST ROUTES

//get for /api/reservation
router.get("/api/tables", (req, res) => res.json(tableInfo));

//get for /api/tables
router.get("/api/waitlist", (req, res) => res.json(waitList));

//get from api's, display table id's
router.post("/api/tables", (req, res) => {
  const newTable = req.body;
  if (tableInfo.length < 2) {
    tableInfo.push(newTable);
    res.json(newTable);
    // console.log(tableInfo.length);
  } else {
    waitList.push(newTable);
    res.json("");
  }
});

router.post("/api/clear", (req, res) => {
  tableInfo = [];
  waitList = [];
  res.json(true);
});

module.exports = router;
