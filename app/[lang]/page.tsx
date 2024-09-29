"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getTranslations } from "../utils/getTranslations";

// Define the Recipe type if it's a custom type
type Recipe = {
  link: string;
  name: {
    en: string;
    fa: string;
  };
};

export default function Home({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const translations = getTranslations(lang);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.length > 0) {
      const filteredSuggestions = translations.topRecipes.filter(
        (recipe: Recipe) => {
          const recipeKey = recipe.link.split("/").pop() as string;
          const recipeNameEn =
            translations.recipes[recipeKey].name.en.toLowerCase();
          const recipeNameFa =
            translations.recipes[recipeKey].name.fa.toLowerCase();
          return recipeNameEn.includes(query) || recipeNameFa.includes(query);
        }
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const foundRecipe = translations.topRecipes.find((recipe) => {
      const recipeNameEn = recipe.name.toLowerCase();
      const recipeNameFa =
        translations.recipes[
          recipe.link.split("/").pop()
        ].name.fa.toLowerCase();
      return recipeNameEn === query || recipeNameFa === query;
    });

    if (foundRecipe) {
      router.push(foundRecipe.link);
    } else {
      console.log("Recipe not found:", searchQuery);
    }
  };

  const handleSuggestionClick = (recipe) => {
    setSearchQuery(recipe.name);
    setSuggestions([]);
    router.push(recipe.link);
  };

  return (
    <div className="flex flex-col min-h-screen font-[family:var(--font-geist-sans)] bg-sand-light text-navy-dark">
      <header className="w-full flex justify-end p-2 text-sm bg-sand-light">
        <div className="flex gap-4">
          <Link href={`/${lang === "en" ? "fa" : "en"}`}>
            <span
              className={`hover:underline ${
                lang === "en" ? "font-bold text-sage" : "text-navy"
              }`}
            >
              English
            </span>
          </Link>
          <span className="text-navy-light">|</span>
          <Link href={`/${lang === "fa" ? "en" : "fa"}`}>
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
        <div className="w-full max-w-md mx-auto mt-8">
          <input
            type="text"
            className={`w-full px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-sage transition-all duration-300 shadow-md placeholder-sage-light bg-white ${
              lang === "fa" ? "text-right" : "text-left"
            }`}
            placeholder={translations.searchPlaceholder}
            dir={lang === "fa" ? "rtl" : "ltr"}
            value={searchQuery}
            onChange={handleInputChange}
          />
          {suggestions.length > 0 && (
            <ul
              className={`mt-2 bg-white shadow-md rounded-lg ${
                lang === "fa" ? "text-right" : "text-left"
              }`}
            >
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.name}
                  className="px-4 py-2 hover:bg-sage-light cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
          <button
            className="mt-4 w-full bg-sage hover:bg-sage-light transition-colors duration-300 text-white font-bold py-2 px-4 rounded-full shadow-lg"
            onClick={handleSearch}
          >
            {translations.findRecipes}
          </button>
          <Link href={`/${lang}/recipes`}>
            <button className="mt-4 w-full bg-sage hover:bg-sage-light transition-colors duration-300 text-white font-bold py-2 px-4 rounded-full shadow-lg">
              {translations.allRecipes}
            </button>
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Your footer content here */}
      </footer>
    </div>
  );
}
