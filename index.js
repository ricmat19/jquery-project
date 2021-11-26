const express = require("express");
const cors = require("cors");
const app = express();
const indexRouter = require("./routes/index");

//insures that the .env file is only run in a development environment and not a production environment
if (process.env.NODE_ENV !== "production") {
  //requires the the .env file configuration be run first hiding all info hidden via the .env file
  require("dotenv").config();
}

app.listen(3000, function () {
  console.log("Server Running...");
});

//allows for different domains to communicate
app.use(cors());

app.use(express.urlencoded({ extended: false }));

//Middleware: Puts the json data in a pages body in a req object, parses the data
app.use(express.json());

app.use(indexRouter);
