const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         "font-primary":"var(--font-urbanist)",
        "rosy-primary": "var(--font-fondamento)",
        "rosy-secondary": "var(--font-redressed)",
        "miuzzic-primary":"var(--font-unbounded)",

        // "rosy-a1": 'Playfair Display',
        // "rosy-b": 'Mulish',
      },
      colors: {
        white: "#FFFFFF",
        black: {
          50: "#1E1E1E",
          100: "#1C1C1C",
          200: "#1A1A1A",
          300: "#191919",
          400: "#161616",
          500: "#121212",
          600: "#101010",
          700: "#111111",
          800: "#141313",
          900: "#000000",
        },
        blue: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#006FEE",
          600: "#005bc4",
          700: "#004493",
          800: "#002e62",
          900: "#001731",
        },
        purple: {
          50: "#F2EAFA",
          100: "#E4D4F4",
          200: "#C9A9E9",
          300: "#AE7EDE",
          400: "#9353D3",
          500: "#7828C8",
          600: "#6020A0",
          700: "#481878",
          800: "#301050",
          900: "#180828",
        },
        green: {
          50: "#E8FAF0",
          100: "#D1F4E0",
          200: "#A2E9C1",
          300: "#74DFA2",
          400: "#45D483",
          500: "#17C964",
          600: "#12A150",
          700: "#0E793C",
          800: "#095028",
          900: "#052814",
        },
        red: {
          50: "#FEE7EF",
          100: "#FDD0DF",
          200: "#FAA0BF",
          300: "#F871A0",
          400: "#F54180",
          500: "#F31260",
          600: "#C20E4D",
          700: "#920B3A",
          800: "#610726",
          900: "#310413",
        },
        pink: {
          50: "#FFEDFA",
          100: "#FFDCF5",
          200: "#FFB8EB",
          300: "#FF95E1",
          400: "#FF71D7",
          500: "#FF4ECD",
          600: "#CC3EA4",
          700: "#992F7B",
          800: "#661F52",
          900: "#331029",
        },
        yellow: {
          50: "#FEFCE8",
          100: "#FDEDD3",
          200: "#FBDBA7",
          300: "#F9C97C",
          400: "#F7B750",
          500: "#F5A524",
          600: "#C4841D",
          700: "#936316",
          800: "#62420E",
          900: "#312107",
        },
        cyan: {
          50: "#F0FCFF",
          100: "#E6FAFE",
          200: "#D7F8FE",
          300: "#C3F4FD",
          400: "#A5EEFD",
          500: "#7EE7FC",
          600: "#06B7DB",
          700: "#09AACD",
          800: "#0E8AAA",
          900: "#053B48",
        },
        zinc: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
        },
      },
    },
  },
  darkMode: ["class"],
  plugins: [
    nextui(),
    function ({ addComponents, addUtilities }) {
      addComponents({
        ".animate-progress": {
          animation: "progress 15s linear infinite",
        },
      });

      addUtilities({
        "@keyframes progress": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      });
    },
  ],
};
