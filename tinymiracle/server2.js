const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use("/", express.static(__dirname));
app.use(bodyParser.json());

app.listen(5000, () => {
  console.log("Server up at 5000");
});
