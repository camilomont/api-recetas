import { Schema, model } from 'mongoose';

interface IRecipe {
  name: string;
  ingredients: string[];
  instructions: string;
}

const recipeSchema = new Schema<IRecipe>({
  name: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, required: true },
});

export const Recipe = model<IRecipe>('Recipe', recipeSchema);
