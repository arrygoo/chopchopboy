import { recipes } from "./recipes";

export type LanguageCode = "en" | "fa";

console.log(recipes);

const translations = {
  en: {
    searchPlaceholder: "Search for recipes...",
    findRecipes: "Find Recipes",
    topRecipes: Object.keys(recipes).map((key) => ({
      name: recipes[key as keyof typeof recipes].name.en,
      link: `/en/recipes/${key}`,
      cuisine: recipes[key as keyof typeof recipes].cuisine,
    })),
    ingredients: "Ingredients",
    instructions: "Instructions",
    backToHome: "Back to Home",
    allRecipes: "All Recipes",
    recipes,
  },
  fa: {
    searchPlaceholder: "جستجوی دستور پخت...",
    findRecipes: "یافتن دستور پخت",
    topRecipes: Object.keys(recipes).map((key) => ({
      name: recipes[key as keyof typeof recipes].name.fa,
      link: `/fa/recipes/${key}`,
      cuisine: recipes[key as keyof typeof recipes].cuisine,
    })),
    ingredients: "مواد لازم",
    instructions: "دستور پخت",
    backToHome: "بازگشت به صفحه اصلی",
    allRecipes: "همه دستور پخت‌ها",
    recipes,
  },
};

export function getTranslations(lang: LanguageCode) {
  return translations[lang];
}
