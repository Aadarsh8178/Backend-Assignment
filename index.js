const express = require("express");
const userRouter = require("./Router/userRouter");
const app = express();
require("./db/db");

app.use(express.json());
app.use(userRouter);

//Listening
app.listen(3000, () => {
  console.log("Server is up on PORT 3000");
});

module.exports = app;
