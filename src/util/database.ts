import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-basics",
  password: "94120609",
});

export default pool;
