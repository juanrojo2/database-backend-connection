const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/db");

router.get("/", (req, res) => {
  res.json("Hola a todos");
});

router.get("/actores", (req, res) => {
  mysqlConnection.query("SELECT * FROM `actores`", (err, rows, fiels) => {
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
