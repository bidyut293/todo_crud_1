var express = require("express");
// var bodyParser = require("body-parser");
var cors = require("cors");
const router = require("./src/routes/dummy.routes");
const data = require('./src/assets/data/data.json')
global.newData = data
var app = express();

app.use(express.json())

var corsOption = {
  origin: '*',
};

app.use(cors(corsOption));

app.use(router)
app.listen(8081, () => {
  console.log("Server is Listening at 8081");
});
