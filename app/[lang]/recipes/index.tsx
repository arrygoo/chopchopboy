import { getTranslations, LanguageCode } from "../../utils/getTranslations";
import Link from "next/link";

interface Recipe {
  name: string;
  // Add the link property
  link: string;
  // ... other properties ...
}

interface RecipesListPageProps {
  params: {
    lang: string;
  };
}

export default function RecipesListPage({ params }: RecipesListPageProps) {
  const { lang } = params;
  const translations = getTranslations(lang as LanguageCode);
  const recipes = translations.topRecipes;

  return (
    <div className="flex flex-col min-h-screen font-[family:var(--font-geist-sans)] bg-sand-light text-navy-dark">
      <header className="w-full flex justify-end p-2 text-sm bg-sand-light">
        <div className="flex gap-4">
          <Link href={`/${lang === "en" ? "fa" : "en"}/recipes`}>
            <span
              className={`hover:underline ${
                lang === "en" ? "font-bold text-coral" : "text-navy"
              }`}
            >
              English
            </span>
          </Link>
          <span className="text-navy-light">|</span>
          <Link href={`/${lang === "fa" ? "en" : "fa"}/recipes`}>
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
        <h1 className="text-3xl font-bold mb-6">{translations.allRecipes}</h1>
        <ul className="w-full max-w-2xl list-disc pl-5">
          {recipes.map((recipe: Recipe, index: number) => (
            <li key={index} className="mb-2">
              <Link href={`/${lang}/recipes/${recipe.link.split("/").pop()}`}>
                <span className="hover:underline">{recipe.name}</span>
              </Link>
            </li>
          ))}
        </ul>
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
