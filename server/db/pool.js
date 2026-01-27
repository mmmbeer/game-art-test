import mysql from "mysql2/promise";
import env from "../config/env.js";

const pool = mysql.createPool({
  host: env.db.host,
  user: env.db.user,
  password: env.db.password,
  database: env.db.name,
  connectionLimit: 10,
  waitForConnections: true,
});

export default pool;