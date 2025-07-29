import { Request, Response } from 'express';
import * as recipeService from '../services/recipeService';
import { Recipe } from '../models/Recipe';

export const createRecipe = async (req: Request, res: Response) => {
  try {
    const recipe = await recipeService.createRecipe(req.body);
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la receta' });
  }
};

export const getAllRecipes = async (_: Request, res: Response) => {
  try {
    const recipes = await recipeService.getAllRecipes();
    res.json(recipes);
  } catch {
    res.status(500).json({ error: 'Error al obtener recetas' });
  }
};

export const getRecipesByIngredients = async (req: Request, res: Response) => {
  try {
    const ingredients = req.query.ingredients as string;
    if (!ingredients) {
      return res.status(400).json({ error: 'Debes proporcionar ingredientes en la query (?ingredients=)' });
    }

    const list = ingredients.split(',').map(i => i.trim());
    const recipes = await recipeService.findRecipesByIngredients(list);

    res.json(recipes);
  } catch {
    res.status(500).json({ error: 'Error al buscar recetas por ingredientes' });
  }
};

export const getRecipeById = async (req: Request, res: Response) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Receta no encontrada' });
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la receta', error });
  }
};

export const updateRecipe = async (req: Request, res: Response) => {
  try {
    const updated = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Receta no encontrada' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la receta', error });
  }
};

export const deleteRecipe = async (req: Request, res: Response) => {
  try {
    const deleted = await Recipe.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Receta no encontrada' });
    res.json({ message: 'Receta eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la receta', error });
  }
};
