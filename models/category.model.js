const db = require("../config/database");
const findAll = (callback) => {
  const sql = "SELECT * FROM category";
  db.query(sql, callback);
};

// Ajouter autres requêtes du CRUD
module.exports = {
  findAll,
};
