/* eslint-disable */
const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
  useBabelRc,
} = require('customize-cra');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/* eslint-disable */
function myOverrides(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }
  for (let i = 0; i < config.plugins.length; i++) {
    const p = config.plugins[i];
    if (!!p.constructor && p.constructor.name === MiniCssExtractPlugin.name) {
      const miniCssExtractOptions = { ...p.options, ignoreOrder: true };
      config.plugins[i] = new MiniCssExtractPlugin(miniCssExtractOptions);
      break;
    }
  }
  return config;
}

module.exports = override(
  myOverrides,
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  fixBabelImports('lodash', {
    libraryName: 'lodash',
    libraryDirectory: '',
    camel2DashComponentName: false,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@font-family': 'Inter',
      '@font-size-base': '14px',
      '@table-header-bg': 'rgba(113, 119, 145, 0.05)',
      '@table-header-color': '#717791',
      '@layout-sider-background-light': '#fff',
      '@layout-sider-background-dark': '#fff',
      '@input-height-base': '48px',
      '@btn-height-base': '48px',
      '@pagination-item-size': '48px',
      '@border-color-base': 'rgba(33, 33, 33, 0.1)',
      // Border
      '@border-color-split': '#F0F0F0',
      // Switch
      '@layout-header-background': '#fff',
      '@layout-body-background': '#FAFAFA',
      // Card
      '@card-shadow': '0px 0px 20px rgba(33, 33, 33, 0.1)',
      '@card-radius': '10px',
      // Menu and Sidebar
      '@menu-bg': '#fff',
      '@menu-icon-size': '20px',
      // MODAL
      '@modal-body-padding': '10px 20px',
      // STEPS
      '@drawer-body-padding': '0',
    },
    // modifyVars: path.join(__dirname, './src/configs/theme/vars.less'),
  }),
  addDecoratorsLegacy(),
  useBabelRc(),
);
