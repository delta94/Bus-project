/* eslint-disable max-lines */
import { createGlobalStyle } from 'styled-components';
import { CSS_RESET, CLASS_UTILITY } from 'utils/css';

const GlobalStyle = createGlobalStyle`
  ${CSS_RESET}
  ${CLASS_UTILITY}
  body {
    background: ${({ theme }) => theme.background.container};
  }
  .hover\\:text-primary {
    &:hover {
      color: ${({ theme }) => theme.palette.primary};
    }
  }
  .text-primary {
    color: ${({ theme }) => theme.palette.primary};
  }
  .text-error {
    color: ${({ theme }) => theme.text.error};
  }
  .text-secondary {
    color: ${({ theme }) => theme.text.secondary};
  }
  .text-header-table {
    color: ${({ theme }) => theme.text.headerTable};
  }
  .text-title {
    color: ${({ theme }) => theme.text.title};
  }
  .text-statistic-value {
    color: ${({ theme }) => theme.text.statisticValue};
  }
  .text-black {
    color: ${({ theme }) => theme.text.black};
  }
  .bg-primary-1 {
    background-color: #fff0f2;
  }
  .bg-primary {
    background-color: ${({ theme }) => theme.palette.primary};
  }
  .gradientBackground {
    background-image: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.palette.lightPrimary}, ${theme.palette.primary})`};
  }
  .bg-error {
    background-color: ${({ theme }) => theme.background.error};
  }
  .bg-container {
    background: ${({ theme }) => theme.background.container};
  }
  .border-top-split-color {
    border-top: 1px solid ${({ theme }) => theme.border.colorSplit};
  }
  /*----------------- Aimation -----------------*/
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .text-12px-22px {
    font: normal normal 12px/22px ${({ theme }) => theme.fonts.primary};
  }
  .text-500-12px-22px {
    font: normal 500 12px/22px ${({ theme }) => theme.fonts.primary};
  }
  /* --------------------------Override antd------------- */
  .ant-card {
    box-shadow: ${({ theme }) => theme.card.shadow};
  }
  .ant-upload-picture-card-wrapper .ant-upload {
    width: 128px;
    height: 128px;
  }
  .ant-form-item {
    margin-bottom: 2px;
  }
  .card-padding-body-0 {
    .ant-card-body {
      padding: 0px;
    }
  }
  form .has-feedback .ant-input-affix-wrapper .ant-input-suffix {
    padding-right: 26px;
  }
  /*-----------------Add on-----------------------*/
  .text-500-14-16 {
    font: normal 500 14px/16px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-14-17 {
    font: normal 600 14px/17px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-12-15 {
    font: normal 600 12px/15px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-13-16 {
    font: normal 600 13px/16px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-14px-16px {
    font: normal 600 14px/16px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-14-20 {
    font: normal 600 14px/20px ${({ theme }) => theme.fonts.primary};
  }
  .text-14-16 {
    font: normal normal 14px/16px ${({ theme }) => theme.fonts.primary};
  }
  .text-14-17 {
    font: normal normal 14px/17px ${({ theme }) => theme.fonts.primary};
  }
  .text-14-18 {
    font: normal normal 14px/18px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-16-19 {
     font: normal 600 16px/19px ${({ theme }) => theme.fonts.primary};
  }
  .text-18-22 {
    font: normal normal 18px/22px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-18-22 {
    font: normal 600 18px/22px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-18-22 {
    font: normal 600 18px/22px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-24px-29px {
    font: normal 600 24px/29px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-24-36 {
    font: normal 600 24px/36px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-30-36 {
    font: normal 600 30px/36px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-50-46 {
    font: normal 600 50px/46px ${({ theme }) => theme.fonts.primary};
  }
  .border-l-4-solid-error {
    border-left: 4px solid ${({ theme }) => theme.border.error};
  }
`;

export default GlobalStyle;
