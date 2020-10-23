const mysql = require("mysql");
const mysqlConnection = mysql.createConnection({
  host: "b6z9ybpb7jlikacrkakm-mysql.services.clever-cloud.com",
  user: "upmnjc16bz2ainbx",
  password: "NIfLF7Z6cB9lUJx1tmjd",
  database: "b6z9ybpb7jlikacrkakm",
  multipleStatements: true
});

mysqlConnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Base de datos conectada");
  }
});

module.exports = mysqlConnection;
