const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");

app.use(morgan("combined"));
//route
app.get("/tin-tuc", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://locallhost:${port}`);
});
