//Dependencies
const express = require("express");
// const path = require("path");

// set up express app
const app = express();
const PORT = process.env.PORT || 3000;

// parsing Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data For table reservation (ARRAY of Objects)
// let tableInfo = [];
// let waitList = [];

//GET / POST ROUTES// API

// // get home
// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "./public/home.html"))
// );

// //get for tables.html
// app.get("/tables", (req, res) =>
//   res.sendFile(path.join(__dirname, "./public/tables.html"))
// );

// //get for reserve.html
// app.get("/reserve", (req, res) =>
//   res.sendFile(path.join(__dirname, "./public/reserve.html"))
// );

// //get for /api/reservation
// app.get("/api/tables", (req, res) => res.json(tableInfo));

// //get for /api/tables
// app.get("/api/waitlist", (req, res) => res.json(waitList));

// //get from api's, display table id's
// app.post("/api/tables", (req, res) => {
//   const newTable = req.body;
//   if (tableInfo.length < 2) {
//     tableInfo.push(newTable);
//     res.json(newTable);
//     // console.log(tableInfo.length);
//   } else {
//     waitList.push(newTable);
//     res.json("");
//   }
// });

// app.post("/api/clear", (req, res) => {
//   tableInfo = [];
//   waitList = [];
//   res.json(true);
// });

app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

// server
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
