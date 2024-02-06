/** @type {import('tailwindcss').Config} */
import formsPlugin from "@tailwindcss/forms";
import aspectPlugin from "@tailwindcss/aspect-ratio";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        appBgLight: "#eff6ff",
        appBgDark: "#5863b3",
        appTextLight: "#eff6ff",
        appTextDark: "#5863b3",
        appTextGrayLight: "#babbbc",
        appTextGrayDark: "#9b9c9c",
        appWhite: "#fcfcfc",
        appBlack: "#00254b",
        appSixty: "#eff6ff",
        appSixtyDark: "#5863b3",
        appThirty: "#fbbc61",
        appThirtyDark: "#fbbc61",
        appTena: "#fd7687",
        appTenb: "#ebcae5",
        appTenc: "#ea5050",
        appPriBlue: "#643b9f",
        appSecBlue: "#ac94f4",
        appRed: "#371f76",
        appGrayLight: "#795695",
        appGrayDark: "#c8a4d4",
        appGreen: "#88bf41",
        appBlue: "#2851a2",
      },
      fontFamily: {
        sonb: "Sono-Bold",
        sonm: "Sono-Medium",
        sonr: "Sono-Regular",
        sonl: "Sono-Light",
      },
    },
  },
  plugins: [formsPlugin, aspectPlugin],
};
