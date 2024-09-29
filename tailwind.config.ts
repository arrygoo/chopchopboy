import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          light: "#FAF8EE",
          DEFAULT: "#F4F1DE",
          dark: "#E9E3C1",
        },
        coral: {
          light: "#E9A08B",
          DEFAULT: "#E07A5F",
          dark: "#C85A3D",
        },
        navy: {
          light: "#5D607A",
          DEFAULT: "#3D405B",
          dark: "#2A2C3F",
        },
        sage: {
          light: "#A3C5B3",
          DEFAULT: "#81B29A",
          dark: "#619A7F",
        },
        gold: {
          light: "#F6DDB1",
          DEFAULT: "#F2CC8F",
          dark: "#EBBA6D",
        },
      },
    },
  },
  plugins: [],
};

export default config;
