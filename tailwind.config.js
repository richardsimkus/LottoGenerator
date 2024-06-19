import daisyui from "daisyui";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      "light",
      "dark",
      "fantasy",
      "emerald",
      "cyberpunk",
      "retro",
      "aqua",
    ],
  },
  plugins: [daisyui],
  theme: {},
};
