module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#6047ec",
          secondary: "#6047ec",
          accent: "#000000",
          neutral: "#ff136f",
          "info": "#000",
          "base-100": "#ffffff",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#1e2b47",
          secondary: "#1e2b47",
          accent: "#fff",
          neutral: "#ff136f",
          "info": "#000",
          "base-100": "#090a27",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
