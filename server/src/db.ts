import * as mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "hipages",
  database: "hipages",
});

connection.connect();

export default connection;
