import { getTranslations } from "../../utils/getTranslations";
import Link from "next/link";

interface RecipesListPageProps {
  params: {
    lang: string;
  };
}

// Ensure the Recipe type includes the 'name' property
type Recipe = {
  link: string;
  name: string;
  cuisine: string;
};

export default function RecipesListPage({ params }: RecipesListPageProps) {
  const { lang } = params;
  const translations = getTranslations(lang as "en" | "fa");
  const recipes = translations.topRecipes;

  // Categorize recipes by cuisine
  const categorizedRecipes = recipes.reduce(
    (acc: Record<string, Recipe[]>, recipe: Recipe) => {
      if (!acc[recipe.cuisine]) {
        acc[recipe.cuisine] = [];
      }
      acc[recipe.cuisine].push(recipe);
      return acc;
    },
    {}
  );

  return (
    <div className="flex flex-col min-h-screen font-[family:var(--font-geist-sans)] bg-sand-light text-navy-dark">
      <header className="w-full flex justify-between items-center p-2 text-sm bg-sand-light">
        <Link href={`/${lang}`}>
          <span className="text-sage hover:underline">
            {translations.backToHome}
          </span>
        </Link>
        <div className="flex gap-4">
          <Link href={`/${lang === "en" ? "fa" : "en"}/recipes`}>
            <span
              className={`hover:underline ${
                lang === "en" ? "font-bold text-sage" : "text-navy"
              }`}
            >
              English
            </span>
          </Link>
          <span className="text-navy-light">|</span>
          <Link href={`/${lang === "fa" ? "en" : "fa"}/recipes`}>
            <span
              className={`hover:underline ${
                lang === "fa" ? "font-bold text-sage" : "text-navy"
              }`}
            >
              فارسی
            </span>
          </Link>
        </div>
      </header>
      <main
        className={`flex flex-col items-center p-8 bg-sand-light flex-grow ${
          lang === "fa" ? "rtl" : "ltr"
        }`}
        dir={lang === "fa" ? "rtl" : "ltr"}
      >
        <h1 className="text-3xl font-bold mb-6">{translations.allRecipes}</h1>
        {Object.keys(categorizedRecipes)
          .sort((a, b) =>
            a === "International" ? -1 : b === "International" ? 1 : 0
          )
          .map((cuisine) => (
            <div key={cuisine} className="w-full max-w-2xl mb-6">
              <h2 className="text-2xl font-semibold mb-2">{cuisine}</h2>
              <ul className="list-none pl-0">
                {categorizedRecipes[cuisine].map((recipe, index) => (
                  <li key={index} className="mb-2 text-sage">
                    <Link
                      href={`/${lang}/recipes/${recipe.link.split("/").pop()}`}
                    >
                      <span className="hover:underline">{recipe.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </main>
    </div>
  );
}
