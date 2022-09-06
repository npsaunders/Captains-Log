//require  items from .env file
require('dotenv').config();
const express = require("express");
const app = express();


// MIDDLEWARE------------------------
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));



// ROUTES
// INDEX
// NEW
app.get("/logs/new", (req, res) => {
  res.render("new.ejs");
})

// DELETE
// UPDATE
// CREATE
// EDIT
// SHOW





//Used to access .env file
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("listening....", PORT);
})


