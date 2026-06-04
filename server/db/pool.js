import mysql from "mysql2/promise";
import env from "../config/env.js";

const pool = mysql.createPool({
  host: env.db.host,
  user: env.db.user,
  password: env.db.password,
  database: env.db.name,
  connectionLimit: Math.max(1, env.db.connectionLimit || 5),
  waitForConnections: true,
});

export default pool;
