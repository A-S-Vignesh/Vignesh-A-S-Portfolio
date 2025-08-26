/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helveticaNeue: ["Helvetica Neue", "sans-serif"],
      },
      colors: {
        "custom-navbarcolor": "#f8fafc",
        "custom-tagcolor": "#42abff",
        "custom-blue": "#c6eafd",
        "custom-darkblue": "#184661",
        "custom-grey": "#313d48",
        "custom-textblue": "#3f9eec",
        "custom-border": "#f8fafc",
        "custom-contactcolor": "#2C3E50",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "gradient-bluetowhite": "linear-gradient(to bottom, #72d0fa, #ffffff)",
        "gradient-bluetogrey": "linear-gradient(to bottom, #0369a1, #343c44)",
        "gradient-whitetoblue": "linear-gradient(to bottom, #ffffff, #c6eafd)",
        "gradient-greytodarkblue":
          "linear-gradient(to bottom, #313d48 , #184661)",
        "gradient-lightbluetoblue":
          "linear-gradient(to bottom, #c6eafd, #bae6fd)",
        "gradient-darkbluetoultradarkblue":
          "linear-gradient(to bottom, #184661, #0c4a6e)",
      },
      boxShadow: {
        "custom-dark": "0 .5rem 1rem rgba(0,0,0,.3)",
        "custom-navbar": "0 1px 12px 0 rgba(8,7,7,.2)",
        "custom-light": "0 .5rem 1rem hsla(0,0%,100%,.3)",
      },
    },
  },
  darkMode: "class",
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#570df8",
          secondary: "#f000b8",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
    darkTheme: null, // Disable dark theme support
  },
};
