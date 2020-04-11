/* eslint-disable */
const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
  useBabelRc,
} = require('customize-cra');
const themeConfig = require('./src/configs/theme/adminTheme');

/* eslint-disable */
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      // Font
      '@font-family': themeConfig.fonts.primary,
      '@font-size-base': '14px',
      '@primary-color': themeConfig.palette.primary,
      '@table-header-bg': themeConfig.background.headerTable,
      '@table-header-color': themeConfig.text.headerTable,
      '@layout-sider-background-light': themeConfig.background.sidebar,
      '@layout-sider-background-dark': themeConfig.background.sidebar,
      '@input-height-base': '48px',
      '@btn-height-base': '48px',
      '@pagination-item-size': '48px',
      '@border-color-base': 'rgba(33, 33, 33, 0.1)',
      '@dropdown-selected-color': '#448AFF',
      // Border
      '@border-color-split': themeConfig.border.colorSplit,
      // Switch
      '@switch-color': '#22C993',
      '@btn-disable-bg': '#CC336670',
      '@btn-disable-color': '#FFFFFF',
      '@layout-header-background': themeConfig.background.sidebar,
      '@layout-body-background': themeConfig.background.container,
      // Card
      '@card-shadow': themeConfig.card.shadow,
      '@card-radius': themeConfig.card.radius,
      // Menu and Sidebar
      '@menu-bg': themeConfig.background.sidebar,
      '@menu-icon-size': themeConfig.menu.iconSize,
      // MODAL
      '@modal-body-padding': '10px 20px',
      // STEPS
    },
  }),
  addDecoratorsLegacy(),
  useBabelRc(),
);
