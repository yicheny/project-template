const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
    addWebpackAlias({
        ['@common']: path.resolve(__dirname, 'src/common'),
        ['@base']: path.resolve(__dirname, 'src/base')
    })
);
