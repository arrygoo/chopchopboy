export interface Recipe {
  name: {
    en: string;
    fa: string;
  };
  ingredients: {
    en: string[];
    fa: string[];
  };
  instructions: {
    en: string[];
    fa: string[];
  };
  cuisine: string;
}

export interface RecipeCollection {
  [key: string]: Recipe;
}
