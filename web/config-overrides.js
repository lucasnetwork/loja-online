/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({ ...configPaths('tsconfig.paths.json') })(config);

  return config;
};
