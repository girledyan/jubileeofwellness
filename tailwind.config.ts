import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2F6F5E",
          light: "#E8F3EF",
          dark: "#1B4438",
        },
      },
    },
  },
  plugins: [],
};

export default config;
