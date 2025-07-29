import { Router } from 'express';
import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, getRecipesByIngredients, updateRecipe } from '../controllers/recipeController';

const router = Router();

router.post('/', createRecipe);
router.get('/', getAllRecipes);
router.get('/search', getRecipesByIngredients);
router.get('/:id', getRecipeById);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

export default router;
