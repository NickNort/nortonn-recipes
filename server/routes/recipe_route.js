import { Router } from 'express';
import * as RecipeController from '../controllers/recipe_controller.js';

const recipeRouter = Router();
const uri = '/recipes';

recipeRouter.post(`${uri}/create`, RecipeController.createRecipe);

export default recipeRouter;