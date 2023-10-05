/** @type {import('tailwindcss').Config} */
// import axios from 'axios';
const axios = require('axios')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#272e71",
        // primary : async () => {
        //   // const appId = process.env.REACT_APP_APP_ID || 1;
        //   const res = await axios.get('https://api-test.innoloft.com/configuration/1/');
        //   // console.log(res)
        //   return res.data.mainColor;
        // },
      }
    },
  },
  plugins: [],
}

// primary : "#272e71",
