const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/xyz", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
