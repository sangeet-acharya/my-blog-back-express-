const Category = require("../models/category.model");

const getAllCategories = (req, res) => {
  Category.findAll((error, results) => {
    if (error) {
      console.error("❌ Erreur lors de la requête SQL:", error.message);
      return res.status(500).send("Erreur serveur");
    }
    res.json(results);
  });
};

// Ajouter autres méthodes du CRUD
module.exports = {
  getAllCategories,
};
