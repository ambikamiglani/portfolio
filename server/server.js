const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "build"); // could also be build
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
// app.use(express.static(__dirname));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
  //   res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(port, () => {
  console.log("Server is up!");
});
