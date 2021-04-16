const colors = require('windicss/colors');
const typography = require('windicss/plugin/typography');

module.exports = {
  darkMode: 'class',
  plugins: [typography],
  theme: {
    extend: {
      colors: {
        myColor: colors.lightBlue,
        myPurple: colors.purple
      }
    }
  }
};
