"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; // Imported Next.js Image component
import { getTranslations, LanguageCode } from "../utils/getTranslations";

// Define the Recipe type if it's a custom type
type Recipe = {
  name: string;
  link: string;
};

interface Suggestion {
  name: string;
  link: string;
}

export default function Home({ params }: { params: { lang: LanguageCode } }) {
  const { lang } = params as { lang: LanguageCode };
  const translations = getTranslations(lang);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setSelectedIndex(-1); // Reset selected index when input changes

    if (query.length > 0) {
      const filteredSuggestions = translations.topRecipes.filter(
        (recipe: { name: string; link: string }) => {
          const recipeKey = recipe.link.split("/").pop() as string;
          const recipeNameEn =
            translations.recipes[
              recipeKey as keyof typeof translations.recipes
            ].name.en.toLowerCase();
          const recipeNameFa =
            translations.recipes[
              recipeKey as keyof typeof translations.recipes
            ].name.fa.toLowerCase();
          return recipeNameEn.includes(query) || recipeNameFa.includes(query);
        }
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      setSelectedIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (event.key === "ArrowUp") {
      setSelectedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (event.key === "Enter" && selectedIndex >= 0) {
      handleSuggestionClick(suggestions[selectedIndex]);
    }
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const foundRecipe = translations.topRecipes.find((recipe: Recipe) => {
      const recipeKey = recipe.link.split("/").pop() || "";
      const recipeNameEn =
        translations.recipes[
          recipeKey as keyof typeof translations.recipes
        ]?.name.en.toLowerCase() || "";
      const recipeNameFa =
        translations.recipes[
          recipeKey as keyof typeof translations.recipes
        ]?.name.fa.toLowerCase() || "";
      return recipeNameEn === query || recipeNameFa === query;
    });

    if (foundRecipe) {
      router.push(foundRecipe.link);
    } else {
      console.log("Recipe not found:", searchQuery);
    }
  };

  const handleSuggestionClick = (recipe: Suggestion) => {
    setSearchQuery(recipe.name);
    setSuggestions([]);
    setSelectedIndex(-1); // Reset selected index when suggestion is clicked
    router.push(recipe.link);
  };

  useEffect(() => {
    if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
      const selectedElement = document.getElementById(
        `suggestion-${selectedIndex}`
      );
      selectedElement?.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

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
          {/* Updated Logo Image Using Next.js Image Component */}
          <div className="mb-4 mx-auto h-16 w-auto relative">
            <Image
              src="/images/logo-clear-bg.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <input
            type="text"
            className={`w-full px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-sage transition-all duration-300 shadow-md placeholder-sage-light bg-white ${
              lang === "fa" ? "text-right" : "text-left"
            }`}
            placeholder={translations.searchPlaceholder}
            dir={lang === "fa" ? "rtl" : "ltr"}
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          {suggestions.length > 0 && (
            <ul
              className={`mt-2 bg-white shadow-md rounded-lg ${
                lang === "fa" ? "text-right" : "text-left"
              }`}
            >
              {suggestions.map((suggestion, index) => (
                <li
                  id={`suggestion-${index}`}
                  key={suggestion.name}
                  className={`px-4 py-2 hover:bg-sage-light cursor-pointer ${
                    index === selectedIndex ? "bg-sage-light" : ""
                  }`}
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
