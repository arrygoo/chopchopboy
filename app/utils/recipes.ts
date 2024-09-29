import { internationalRecipes } from "./internationalRecipes";
import { persianRecipes } from "./persianRecipes";
import { RecipeCollection } from "./recipeTypes";

export const recipes: RecipeCollection = {
  ...persianRecipes,
  ...internationalRecipes,
};
