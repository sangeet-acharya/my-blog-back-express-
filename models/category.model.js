const db = require("../config/database");

const findAll = (callback) => {
  const sql = "SELECT * FROM category";
  db.query(sql, callback);
};

const findById = (id, callback) => {
  const sql = "SELECT * FROM category WHERE id = ?";
  db.query(sql, [id], callback);
};

const createNew = (name, callback) => {
  const sql = "INSERT INTO category (name) VALUES (?)";
  db.query(sql, [name], callback);
};

// 1. On déclare une fonction fléchée updateCat.
// 2.Elle prend trois paramètres :
// name → le nouveau nom que tu veux donner à la catégorie.
// id → l’identifiant de la catégorie que tu veux modifier.
// callback → une fonction qui sera exécutée après que la requête SQL a été effectuée, pour gérer le résultat ou l’erreur.
const updateCat = (name, id, callback) => {
  // 1.On crée une variable sql qui contient la requête SQL.
  // 2.Cette requête est une mise à jour (UPDATE) de la table category.
  // 3.SET name = ? → on veut modifier la colonne name.
  // 4.WHERE id = ? → on ne veut modifier que la catégorie dont l’id correspond à la valeur fournie.
  // 5.Les ? sont des placeholders pour éviter les injections SQL. On remplacera ces ? avec des valeurs réelles dans la requête.
  const sql = "UPDATE category SET name = ? WHERE id = ?";
  // 1.Ici, on exécute la requête SQL avec la connexion à la base (db.query).
  // 2.[name, id] → ce tableau fournit les valeurs qui remplacent les ? dans la requête :
  //   .le premier ? devient name.
  //   .le deuxième ? devient id.
  // 3.callback → c’est la fonction qui sera appelée quand la requête est terminée, pour gérer le résultat (succès) ou l’erreur.
  db.query(sql, [name, id], callback);
};
// ✅ En résumé :
// La fonction updateCat permet de modifier le nom d’une catégorie précise dans la base de données en
// utilisant son id. Elle est sécurisée contre les injections SQL grâce aux ? et
// utilise un callback pour gérer le résultat.

const deleteCat = (id, callback) => {
  const sql = "DELETE FROM category WHERE id = ?";
  db.query(sql, [id], callback);
};
// Ajouter autres requêtes du CRUD
module.exports = {
  findAll,
  findById,
  createNew,
  updateCat,
  deleteCat,
};
