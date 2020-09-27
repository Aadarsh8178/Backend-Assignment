const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    validate(value) {
      const trimmedValue = value.trim();
      if (trimmedValue.length <= 0) {
        throw Error("Invalid Username");
      }
    },
  },
  password: {
    type: String,
    required: true,
    validate(value) {
      const trimmedValue = value.trim();
      if (trimmedValue.length <= 6) {
        throw Error("Password must be of length greater then 6");
      }
    },
  },
  email: {
    type: String,
    required: true,
    validate(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(email).toLowerCase())) {
        throw Error("Invalid Email");
      }
    },
  },
});

module.exports = User;
