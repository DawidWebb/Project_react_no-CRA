const { merge } = require("webpack-merge");

const commonConfoguration = require("./webpack/common");

module.exports = (_env, { mode }) => {
  const properlyConfig = require(`./webpack/${mode}`);
  const mergedConfig = merge(commonConfoguration, properlyConfig);

  return mergedConfig;
};
