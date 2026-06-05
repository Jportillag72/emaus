import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#1E3557",
        parchment: "#FAF8F3",
        gold: "#C9A86A",
        stone: "#E5E5E5",
        olive: "#7A8B68",
        ink: "#162238"
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(30, 53, 87, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
