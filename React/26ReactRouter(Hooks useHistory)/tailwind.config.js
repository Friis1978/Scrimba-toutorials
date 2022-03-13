module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      small: "0.5px",
    },
    extend: {
      backgroundPosition: {
        "right-top-75": "right top 75%",
      },
      backgroundImage: {
        "react-logo": "url(../public/logo.png)",
      },
      boxShadow: {
        small: "0px 2px 5px 2px rgba(190, 193, 202,0.5)",
        big: "0px 3px 20px 5px rgba(190, 193, 202,0.5)",
      },
      colors: {
        primary: "#0B2434",
        secondary: "#5035FF",
      },
      spacing: {
        box: "500px",
      },
    },
  },
  variants: {},
  plugins: [],
};
