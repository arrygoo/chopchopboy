import { notFound } from "next/navigation";
import { getTranslations } from "../../../utils/getTranslations";
import Link from "next/link";

interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string[];
}

interface RecipePageProps {
  params: {
    lang: string;
    recipe: string;
  };
}

export default function RecipePage({ params }: RecipePageProps) {
  const { lang, recipe } = params;
  const translations = getTranslations(lang);
  const recipeData = translations.topRecipes.find((r: any) =>
    r.link.endsWith(recipe)
  );

  if (!recipeData) {
    notFound();
  }

  // Mock data: Replace with actual data fetching logic
  const recipeDetails: Recipe = {
    name: recipeData.name,
    ingredients: translations.recipes[recipe].ingredients[lang], // Access the correct language's ingredients
    instructions: translations.recipes[recipe].instructions[lang], // Access the correct language's instructions
  };

  return (
    <div className="flex flex-col min-h-screen font-[family:var(--font-geist-sans)] bg-sand-light text-navy-dark">
      <header className="w-full flex justify-end p-2 text-sm bg-sand-light">
        <div className="flex gap-4">
          <Link href={`/${lang}/recipes`}>
            <span className="hover:underline text-navy">
              {translations.allRecipes}
            </span>
          </Link>
          <Link href={`/${lang === "en" ? "fa" : "en"}/recipes/${recipe}`}>
            <span
              className={`hover:underline ${
                lang === "en" ? "font-bold text-coral" : "text-navy"
              }`}
            >
              English
            </span>
          </Link>
          <span className="text-navy-light">|</span>
          <Link href={`/${lang === "fa" ? "en" : "fa"}/recipes/${recipe}`}>
            <span
              className={`hover:underline ${
                lang === "fa" ? "font-bold text-coral" : "text-navy"
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
        <h1 className="text-3xl font-bold mb-6">{recipeDetails.name}</h1>
        <section className="w-full max-w-2xl mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            {translations.ingredients}
          </h2>
          <ul
            className={`${lang === "fa" ? "list-disc pr-5" : "list-disc pl-5"}`}
          >
            {recipeDetails.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>
        <section className="w-full max-w-2xl">
          <h2 className="text-2xl font-semibold mb-2">
            {translations.instructions}
          </h2>
          <ol
            className={`${
              lang === "fa" ? "list-decimal pr-5" : "list-decimal pl-5"
            }`}
          >
            {recipeDetails.instructions.map((instruction, index) => (
              <li key={index} className="mb-2">
                {instruction}
              </li>
            ))}
          </ol>
        </section>
      </main>
      <footer className="w-full flex justify-center p-4 bg-sand">
        <Link href={`/${lang}`}>
          <span className="text-sage hover:underline">
            {translations.backToHome}
          </span>
        </Link>
      </footer>
    </div>
  );
}

export async function generateStaticParams() {
  const translationsEn = getTranslations("en");
  const translationsFa = getTranslations("fa");

  const recipesEn = translationsEn.topRecipes.map((recipe: any) => ({
    lang: "en",
    recipe: recipe.link.split("/").pop(),
  }));

  const recipesFa = translationsFa.topRecipes.map((recipe: any) => ({
    lang: "fa",
    recipe: recipe.link.split("/").pop(),
  }));

  return [...recipesEn, ...recipesFa];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; recipe: string };
}) {
  const translations = getTranslations(params.lang);
  const title =
    translations.topRecipes.find((r: any) => r.link.endsWith(params.recipe))
      ?.name || "Recipe";
  return {
    title: `${title} | My Recipe App`,
    description: `Learn how to make ${title} with our easy-to-follow instructions.`,
  };
}
