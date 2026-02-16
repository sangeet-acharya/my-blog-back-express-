const db = require("../config/database");

const findByEmail = (email, callback) => {
  const sql = "SELECT * FROM `user` WHERE email = ?";
  db.query(sql, [email], callback);
};

const create = (username, email, hashedPassword, callback) => {
  const sql =
    "INSERT INTO `user` (username, email, password) VALUES ( ?, ?, ?)";
  db.query(sql, [username, email, hashedPassword], callback);
};
module.exports = {
  create,
  findByEmail,
};
