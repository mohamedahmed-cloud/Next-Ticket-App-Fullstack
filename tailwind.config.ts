import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        teal: "#008080",
        white: "#fff",
        black: "#000000",
        red: "#F53131",
        whitep: "#eee",
        dark:"#140F0F",
        toolcolor:"#004D4E",
        statusOrange:"#EEC121",
        statusGreen:"#449528"

      },
    },
  },
  plugins: [],
};
export default config;


