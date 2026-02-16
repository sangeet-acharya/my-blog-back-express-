// 🧠 Règle simple à retenir
// 👉 params = identifier une ressource
// 👉 query = filtrer / trier
// 👉 body = envoyer des données

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
const getCategoryById = (req, res) => {
  const id = req.params.id;

  Category.findById((error, results) => {
    if (error) {
      console.error("❌ Erreur lors de la requête SQL:", error.message);
      return res.status(500).send("Erreur serveur");
    }
    res.json(results);
  });
};

const createCategory = (req, res) => {
  const newCategory = req.body;

  Category.createNew((error, results) => {
    if (!newCategory.name) {
      return res.status(400).json({ message: "Le nom est obligatoire" });
    }
    if (error) {
      console.error("❌ Erreur lors de la requête SQL:", error.message);
      return res.status(500).send("Erreur serveur");
    }
    res.status(201).json(results);
  });
};

const updateCategory = (req, res) => {
  const id = req.params.id;
  const updateCategory = req.body;

  Category.updateCat((error, results) => {
    if (error) {
      console.error("❌ Erreur lors de la requête SQL:", error.message);
      return res.status(500).send("Erreur serveur");
    }
    res.json(results);
  });
};

const deleteCategory = (req, res) => {
  const id = req.params.id;

  Category.deleteCat((error, results) => {
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
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
