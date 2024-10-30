const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

router
  .route("/")
  .get(recipeController.getAllRecipes)
  .post(recipeController.createRecipe);

router
  .route("/:id")
  .get(recipeController.getRecipeById)
  .patch(recipeController.updateRecipe)
  .delete(recipeController.deleteRecipe);

module.exports = router;
