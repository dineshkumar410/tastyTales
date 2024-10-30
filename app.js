const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();
app.use(bodyParser.json());

connectDB();

app.use("/api/v1/recipes", recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
