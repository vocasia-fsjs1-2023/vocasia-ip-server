const { Recipe, Comment } = require('../models');

class RecipeController {
  static async createRecipe(req, res) {
    try {
      const { title, description, ingredients, production } = req.body;
      const user = req.authUser;
      const recipe = await Recipe.create({ title, description, ingredients, production, userId: user?.id });
      res.status(201).json(recipe);
    } catch (error) {
      console.error(`Error: ${error}`);
      res.status(500).json({ error: 'Server internal error' });
    }
  }

  static async getRecipe(req, res) {
    try {
      const recipes = await Recipe.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      });
      res.status(200).json({ recipes });
    } catch (error) {
      console.error(`Error: ${error}`);
      res.status(500).json({ error: 'Server internal error' });
    }
  }

  static async getRecipeById(req, res) {
    try {
      const { id } = req.params;
      const recipe = await Recipe.findByPk(id, {
        include: [{ model: Comment, as: 'comments'}],
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      });
      if (!recipe) {
        return res.status(404).json({ error: 'Resep tidak ditemukan' });
      }
      res.status(200).json(recipe);
    } catch (error) {
      console.error(`Error: ${error}`);
      res.status(500).json({ error: 'server internal error' });
    }
  }

  static async updateRecipe(req, res) {
    try {
      const { id } = req.params;
      const { title, description, ingredients, production } = req.body;
      const recipe = await Recipe.findByPk(id);

      if (!recipe) {
        return res.status(404).json({ error: 'Resep tidak ditemukan' });
      }

      recipe.title = title;
      recipe.description = description;
      recipe.ingredients = ingredients;
      recipe.production = production;

      await recipe.save();
      return res.status(200).json(recipe);
    } catch (error) {
      console.error(`Error: ${error}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Delete Recipe
  static async deleteRecipe(req, res) {
    try {
      const { id } = req.params;
      const recipe = await Recipe.findByPk(id);

      if (!recipe) {
        return res.status(404).json({ error: 'Resep tidak ditemukan' });
      }

      const recipeName = recipe.title;
      await recipe.destroy();
      return res.status(200).json({ message: `Resep ${recipeName} telah di hapus` });
    } catch (error) {
      console.error(`Error: ${error}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = RecipeController;
