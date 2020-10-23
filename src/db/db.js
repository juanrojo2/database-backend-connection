const mysql = require("mysql");
const mysqlConnection = mysql.createConnection({
  host: "bg6lgyk9ui3nsskauyqs-mysql.services.clever-cloud.com",
  user: "u8rxldvyxh1fthhw",
  password: "yS8oYGK7aOQQliEHsYDq",
  database: "bg6lgyk9ui3nsskauyqs",
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
