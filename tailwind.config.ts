import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "1.688rem",
      },
      lineHeight: {
        base: "1.688rem",
      },

      letterSpacing: {
        normal: "-0.5px",
        medium: "-0.0625rem",
        large: "-0.08125rem",
      },

      colors: {
        primary: "#FB8226",
        primaryLight: "#f5c9a2",
        secondary: "#036E97",
        neutral: "#697177",
        warning: "#FF8B8B",
        error: "#F31260",
        dark: "#11181c",
        black: "#000000",
      },
      space: {},
      shadows: {
        sm: "0 4px 8px 4px rgb(56 57 59 / 17%)",
        md: "0 4px 14px 4px rgb(56 57 59 / 17%)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
