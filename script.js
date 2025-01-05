// const express = require('express');
import express from "express";
import { ConnectDb } from "./connectDb.js";
import User from "./Schema/user.model.js";
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/profile", function (req, res) {
  res.send("Hello from ");
});
app.get("/user-data", async function (req, res) {
  console.log(req);

  const data = await User.create(req.body);
  res.send(data);
});
ConnectDb().then(() => {
  app.listen(3000, () => {
    console.log("server started on port 3000");
  });
});
