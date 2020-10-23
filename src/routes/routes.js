const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/db");

router.get("/", (req, res) => {
  res.json("Hola a todos");
});

//Consulta completa
router.get("/actores", (req, res) => {
  mysqlConnection.query("SELECT * FROM actores", (err, rows, fiels) => {
    if (!err) {
      //let documento = rows[5].documento;
      res.json(rows);
      console.log(fiels);
    } else {
      console.log(err);
    }
  });
});

//Consulta especifica
router.get("/actores/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `SELECT * FROM actores WHERE actores.id = ${id}`,
    (err, rows, fiels) => {
      if (!err) {
        res.json(rows);
        console.log(fiels);
      } else {
        console.log(err);
      }
    }
  );
});

//Delete req
router.delete("/actores/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    ` DELETE FROM actores WHERE actores.id = ${id}`,
    (err, rows, fiels) => {
      if (!err) {
        res.json(rows);
        console.log(fiels);
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
