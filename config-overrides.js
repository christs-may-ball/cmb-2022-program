/* config-overrides.js */
/* eslint-disable react-hooks/rules-of-hooks */
const { useBabelRc, override } = require("customize-cra");

module.exports = (config, env) => {
  config = override(useBabelRc())(config, env);
  config.resolve.extensions = [".js", ".jsx", ".ts", ".tsx", ".json"];
  return config;
};
