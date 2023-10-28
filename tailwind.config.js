module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fcfcfc",
          100: "#f2f2f2",
          600: "#828282",
          700: "#686868",
          800: "#434343",
          900: "#4e1111",
          "700_02": "#545454",
          "700_01": "#656565",
        },
        blue: {
          "200_7f": "#88ccee7f",
          "200_3f": "#88ccee3f",
          "200_99": "#88ccee99",
        },
        red: { A200: "#ff4545" },
        black: { 900: "#000000", "900_3f": "#0000003f", "900_72": "#00000072" },
        light_blue: { 800: "#0072b2", 900: "#145281" },
        white: { A700_01: "#fffefd", A700: "#ffffff" },
        blue_gray: { 900: "#343434", "900_01": "#292d32" },
      },
      fontFamily: { jost: "Jost", poppins: "Poppins" },
      boxShadow: {
        bs9: "0px 0px  60px 15px #88ccee7f",
        bs7: "0px 0px  60px 25px #88ccee7f",
        bs8: "0px 0px  60px 55px #88ccee7f",
        bs6: "0px 4px  30px 25px #88ccee3f",
        bs5: "0px 4px  60px 25px #88ccee7f",
        bs10: "0px 0px  60px 20px #ff4545",
        bs4: "0px 0px  60px 25px #88ccee99",
        bs: "0px 4px  4px 0px #0000003f",
        bs3: "0px 0px  10px 10px #0000003f",
        bs2: "0px 4px  10px 5px #0000003f",
        bs1: "0px 4px  10px 10px #0000003f",
        bs11: "0px 50px  50px 0px #0000003f",
      },
      textShadow: {
        ts: "0px 0px  10px #0000003f",
        ts1: "0px 4px  4px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
