/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundPosition: {
      "right-top-30": "top right 30%",
    },
    colors: {
      "body-bg": "#e9e9e9",
      "baker-chocolate": "#593B0F",
      //black: "#0C0C0C",
      black: "#000000",
      "black-russian": "#1C1D21",
      "black-russian2": "#27282E",
      "black-russian3": "#1F1F20",
      blue: "#4574EF",
      "chetwode-blue": "#5D6FC0",
      "cornflower-blue": "#6094E2",
      eclipse: "#393939",
      green: "#13ce66",
      "gray-dark": "#273444",
      gray: "#737373",
      "gray-light": "#d3dce6",
      "gulf-blue": "#364362",
      "light-grey": "#D5D5D5",
      "lucky-point": "#141F52",
      nero: "#232323",
      nero3: "rgb(35, 35, 35, 0.4)",
      nero2: "#151515",
      nero4: "#181818",
      nobel: "#989898",
      orange: "#ff7849",
      pink: "#ff49db",
      purple: "#7e5bef",
      "royal-blue": "#4574EF",
      "suva-grey": "#909090",
      white: "#FFFFFF",
      whiteOp1: "rgba(255, 255, 255, 1)",
      whisper: "#E9E9E9",
      yellow: "#ffc82c",
      "link-water": "#C9D6DF",
      fiord: "#52616B",
      mandy: "#F05359",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    fontFamily: {
      interTight: ["Inter Tight", "sans-serif"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      arial: ["Arial", "serif"],
    },
    fontSize: {
      xxs: ["0.625rem", { lineHeight: "0.625rem" }], //10px
      xs: ["0.75rem", { lineHeight: "1rem" }], //12px
      sm: ["0.875rem", { lineHeight: "1.25rem" }], //14px
      sl: ["0.9375rem", { lineHeight: "1.25rem" }], //15px
      base: ["1rem", { lineHeight: "1.5625rem" }], //16px
      baseHeight: ["1rem", { lineHeight: "1.125rem" }], //16px - 18px
      // lg: ['1.125rem', {lineHeight: '1.75rem'}],
      lg: ["1.125rem", { lineHeight: "1.35rem" }], //18px
      xl: ["1.25rem", { lineHeight: "1.5rem" }], //20px
      "1xl": ["1.375rem", { lineHeight: "1.5rem" }], //22 px
      "2xl": ["1.5rem", { lineHeight: "2rem" }], //24px
      "3xl": ["1.75rem", { lineHeight: "2.125rem" }], //28px
      "3.5xl": ["1.875rem", { lineHeight: "1.875rem" }], //30px
      "3.8xl": ["2rem", { lineHeight: "2rem" }], //32px
      "4xl": ["2.5rem", { lineHeight: "2.875rem" }], //40px
      // '5xl': ['3rem', {lineHeight: '1'}],
      "6xl": ["3.75rem", { lineHeight: "4.5rem" }], //60px
      "6.5xl": ["4.5rem", { lineHeight: "1" }], //76px
      "7xl": ["5rem", { lineHeight: "1" }], // 80px
      "7.5xl": ["5.625rem", { lineHeight: "1" }], //90px
      // '8xl': ['6rem', {lineHeight: '1'}],
      "9xl": ["9rem", { lineHeight: "1" }], //144px
      "10xl": ["9.6875rem", { lineHeight: "1" }], //155px
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        none: "0px",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        l5: "0.3125rem",
        lr: "0.625rem", //10px
        l15: "0.9375rem", //15px
        xl: "0.75rem",
        "2xl": "1rem",
        "2.5xl": "1.25rem",
        "3xl": "1.5rem",
        "3.5xl": "1.75rem",
        "4xl": "1.874rem",
        "5xl": "1.875rem", //30px
        "6xl": "2.5625rem", //41px
        "7xl": "3.125rem", //50px
        "8xl": "3.75rem", //60px
        full: "9999px",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
    height: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    }),
    letterSpacing: {
      1.05: "-1.05px",
      tighter: "-0.05em",
      tighter1: "-0.056em",
      tight: "-0.035em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      6.3: "1.375rem",
      6.5: "1.5625rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      13: "3.4375rem", //55px
    },
    margin: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    maxWidth: ({ theme }) => ({
      none: "none",
      0: "0rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      prose: "65ch",
    }),
    opacity: {
      0: "0",
      5: "0.05",
      10: "0.1",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      40: "0.4",
      50: "0.5",
      60: "0.6",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      90: "0.9",
      95: "0.95",
      100: "1",
    },
    padding: ({ theme }) => theme("spacing"),
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "0.125rem",
      0.7: "0.1875rem",
      1: "0.25rem",
      1.2: "0.3125", //5px
      1.5: "0.375rem", //6px
      2: "0.5rem",
      2.5: "0.625rem", //10px
      3: "0.75rem",
      3.5: "0.875rem",
      3.8: "0.9375rem", //15px
      4: "1rem",
      4.5: "1.125rem", //18px
      5: "1.25rem", //20px
      6: "1.5rem", //24px
      // 6.5: '1.75rem',//28px
      7: "1.875rem", //30px
      8: "2rem",
      // 9: '2.25rem',
      9: "2.1875rem", //35px
      10: "2.5rem", //40px
      10.5: "2.8125rem", //45px
      11: "2.75rem",
      12: "3.125rem", //50px
      13: "3.4375rem", //55px
      14: "3.5rem",
      15: "3.75rem", //60px
      16: "4rem",
      18: "4.375rem", //70px
      20: "5rem", //80px
      21: "5.3125rem", //85px
      24: "6rem",
      24.2: "5.3125", //
      24.5: "5.625rem", //90px
      25: "6.25rem", //100px
      28: "7rem",
      29: "7.375rem", //118px
      32: "8rem",
      33: "8.125rem", //130px
      34: "8.75rem", //140px
      36: "9.375rem", //150px
      40: "10rem", //160px
      44: "11rem",
      45: "11.25rem", //180px
      47: "11.875rem", //190px
      48: "12rem",
      50: "12.5rem", //200px
      52: "13rem",
      56: "14rem",
      60: "15rem", //240px
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    width: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    }),
  },
};
