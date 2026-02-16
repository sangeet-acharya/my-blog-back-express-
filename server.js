require("dotenv").config();
const express = require("express");
const app = express();
// [...]
const authRoutes = require("./routes/auth.routes");
const categoryRoutes = require("./routes/category.routes");

const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Autre routes");
});

app.get("/articles", (req, res) => {
  const sql = "SELECT * FROM article";
  db.query(sql, (error, results) => {
    if (error) {
      console.error("❌ Erreur lors de la requête SQL:", error.message);
      return res.status(500).send("Erreur serveur");
    }
    res.json(results);
  });
});

app.use(express.json());
app.use("/categories", categoryRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
