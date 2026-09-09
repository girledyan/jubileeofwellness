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
          DEFAULT: "#7F3F98",
          light: "#F3F9EC",
          dark: "#3D1F49",
          green: "#8CC53F",
        },
      },
    },
  },
  plugins: [],
};

export default config;
