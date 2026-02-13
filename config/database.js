const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST, // Adresse du serveur MySQL
  user: process.env.DB_USER, // Nom d'utilisateur MySQL
  password: process.env.DB_PASSWORD, // Mot de passe MySQL
  database: process.env.DB_NAME, // Nom de la base de données
});

connection.connect((error) => {
  if (error) {
    console.error("❌ Erreur de connexion à MySQL:", error.message);
    return;
  }
  console.log("✅ Connecté à la base de données MySQL");
});

module.exports = connection;
