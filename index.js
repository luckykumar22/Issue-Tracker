const express = require("express");
const app = express();
const db = require("./config/mongoose");
const port = 3000;
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

app.use(express.urlencoded());
app.use(express.static("assets"));
app.use(expressLayouts);

//extract styles and scripts
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//set up view engine
app.set("view engine", "ejs");
app.set("view", path.join(__dirname, "/views"));

// use routes
// app.use("/", require("./routes"));
app.listen(port, function (err) {
  if (err) {
    console.log(`Error running the server: ${err}`);
  }
  console.log(`Server running on port: ${port}`);
});
