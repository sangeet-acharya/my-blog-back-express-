const db = require("../config/database");

const create = (firstname, lastname, email, hashedPassword, callback) => {
  const sql =
    "INSERT INTO user (firstname, lastname, email, password) VALUES (?, ?, ?, ?)";
  db.query(sql, [firstname, lastname, email, hashedPassword], callback);
};

const findByEmail = (email, callback) => {
  const sql = "SELECT * FROM user WHERE email = ?";
  db.query(sql, [email], callback);
};

module.exports = {
  create,
  findByEmail,
};
