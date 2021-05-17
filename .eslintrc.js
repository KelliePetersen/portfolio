module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: "airbnb",
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "arrow-parens": "as-needed",
    quotes: [2, "double", { avoidEscape: true }],
  },
};
