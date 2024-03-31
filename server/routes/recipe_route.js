import { Router } from 'express';
import * as RecipeController from '../controllers/recipe_controller.js';

const recipeRouter = Router();
const uri = '/recipes';

recipeRouter.post(`${uri}/create`, RecipeController.createRecipe);
recipeRouter.get(uri, RecipeController.getRecipes);
recipeRouter.get(`${uri}/getRecipe`, RecipeController.getRecipe);
recipeRouter.delete(uri, RecipeController.deleteRecipe);
recipeRouter.put(uri, RecipeController.updateRecipe);

export default recipeRouter;