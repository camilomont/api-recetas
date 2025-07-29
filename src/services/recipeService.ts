import { Recipe } from '../models/Recipe';

export const createRecipe = async (data: { name: string; ingredients: string[]; instructions: string; }) => {
  return await Recipe.create(data);
};

export const getAllRecipes = async () => {
  return await Recipe.find();
};

export const findRecipesByIngredients = async (ingredients: string[]) => {
  return await Recipe.find({ ingredients: { $all: ingredients } });
};
