const express = require("express");
const router = new express.Router();
const User = require("../models/User");

router.post("/user", async (req, res) => {
  const payload = req.body;
  try {
    const user = new User(payload);
    await user.save();
    res.status(201).send();
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/user/:id", async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(400).send();
  }
  try {
    const user = await User.findOne({ _id: id });
    console.log(user);
    res.status(200).send(user);
  } catch (e) {
    res.status(401).send();
  }
});

router.put("/user/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send();
  }
  const email = req.body.email;
  const name = req.body.name;
  if (!name && !email) {
    res.status(400).send("no fields to update");
  }
  try {
    await User.updateOne({ _id: id }, { $set: { email: email, name: name } });
    // await user.save();
    res.status(201).send();
  } catch (e) {
    res.status(401).send();
  }
});

router.delete("/user/:id", async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(400).send();
  }
  try {
    const user = await User.deleteOne({ _id: id });
    console.log(user);
    res.status(200).send();
  } catch (e) {
    res.status(401).send();
  }
});
module.exports = router;
