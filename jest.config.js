// module.exports = {
//     roots: ["<rootDir>/src"],
//     testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js?$",
//     moduleFileExtensions: ["js", "json", "node"],
//   };
module.exports = {
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  };