import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FE3D87",
        secondary: "#02AFFF",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
