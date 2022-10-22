/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      "universe-blue": "#070724",
      "dark-gray": "#38384F",
      gray: "#838391",
      "dark-cyan": "#419EBB",
      "light-orange": "#EDA249",
      purple: "#6f2ed6",
      "light-red": "#D14C32",
      red: "#D83A34",
      "dark-orange": "#CD5120",
      cyan: "#1ec2a4",
      "dark-blue": "#2d68f0",
    },
    fontFamily: {
      antonio: ["Antonio", "sans-serif"],
      spartan: ["League Spartan", "sans-serif"],
    },
    screens: {
      "1bp": { max: "1110px" },
      "2bp": { max: "961px" },
      "3bp": { max: "768px" },
      "4bp": { max: "608px" },
      "5bp": { max: "375px" },
    },
    extend: {
      
    },
  },
  plugins: [],
};
