/* eslint-disable max-lines */
/* eslint-disable no-useless-escape */
/* eslint-disable no-param-reassign */
import BezierEasing from 'bezier-easing';
import tinycolor from 'tinycolor2';
import { CSSContent } from './theme';

const DEFAULT_PRIMARY_COLOR = '#1890ff';

const baseEasing = BezierEasing(0.26, 0.09, 0.37, 0.18);

const primaryEasing = baseEasing(0.6);
const currentEasing = (index) => baseEasing(index * 0.1);

tinycolor.mix = (color1, color2, amount) => {
  amount = amount === 0 ? 0 : amount || 50;

  const rgb1 = tinycolor(color1).toRgb();
  const rgb2 = tinycolor(color2).toRgb();

  const p = amount / 100;

  const rgba = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b,
    a: (rgb2.a - rgb1.a) * p + rgb1.a,
  };
  return tinycolor(rgba);
};

function generateHoverColor(color, ratio = 5) {
  return tinycolor
    .mix('#ffffff', color, (currentEasing(ratio) * 100) / primaryEasing)
    .toHexString();
}

function generateActiveColor(color, ratio = 7) {
  return tinycolor
    .mix(
      '#333333',
      color,
      (1 - (currentEasing(ratio) - primaryEasing) / (1 - primaryEasing)) * 100,
    )
    .toHexString();
}

function generateShadowColor(color, ratio = 9) {
  return tinycolor
    .mix(
      '#888888',
      color,
      (1 - (currentEasing(ratio) - primaryEasing) / (1 - primaryEasing)) * 100,
    )
    .setAlpha(0.2)
    .toRgbString();
}

function IEVersion() {
  const { userAgent } = navigator;
  const isIE =
    userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  const isEdge = userAgent.indexOf('Edge') > -1 && !isIE;
  const isIE11 =
    userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    const fIEVersion = parseFloat(RegExp.$1);
    if (fIEVersion === 7) {
      return 7;
    }
    if (fIEVersion === 8) {
      return 8;
    }
    if (fIEVersion === 9) {
      return 9;
    }
    if (fIEVersion === 10) {
      return 10;
    }
    return 6;
  }
  if (isEdge) {
    return 'edge';
  }
  if (isIE11) {
    return 11;
  }
  return 0;
}

const generateCustomCss = (customCss) => {
  if (
    typeof customCss !== 'string' ||
    (typeof customCss === 'string' && customCss.trim().length === 0)
  ) {
    return '';
  }
  customCss = customCss.replace(/\$primary\-color/g, 'var(--primary-color)');
  customCss = customCss.replace(
    /\$primary\-hover-color/g,
    'var(--primary-hover-color)',
  );
  customCss = customCss.replace(
    /\$primary\-active-color/g,
    'var(--primary-active-color)',
  );
  customCss = customCss.replace(
    /\$primary\-shadow-color/g,
    'var(--primary-shadow-color)',
  );
  return customCss;
};

const generateStyleHtml = (colorObj, customCss) => {
  const { activeColor, primaryColor, hoverColor, shadowColor } = colorObj;
  if (!IEVersion()) {
    const cssVar = `
      :root {
        --primary-color: ${primaryColor};
        --primary-hover-color: ${hoverColor};
        --primary-active-color: ${activeColor};
        --primary-shadow-color: ${shadowColor};
      }
    `;
    return `${cssVar}\n${CSSContent}\n${generateCustomCss(customCss)}`;
  }
  let IECSSContent = `${CSSContent}\n${generateCustomCss(customCss)}`;
  IECSSContent = IECSSContent.replace(
    /var\(\-\-primary\-color\)/g,
    primaryColor,
  );
  IECSSContent = IECSSContent.replace(
    /var\(\-\-primary\-hover\-color\)/g,
    hoverColor,
  );
  IECSSContent = IECSSContent.replace(
    /var\(\-\-primary\-active\-color\)/g,
    activeColor,
  );
  IECSSContent = IECSSContent.replace(
    /var\(\-\-primary\-shadow\-color\)/g,
    shadowColor,
  );
  return IECSSContent;
};

export function generateThemeColor(color) {
  let primaryColor;
  if (!tinycolor(color).isValid()) {
    primaryColor = DEFAULT_PRIMARY_COLOR;
    return {
      primaryColor,
      hoverColor: generateHoverColor(primaryColor),
      activeColor: generateActiveColor(primaryColor),
      shadowColor: generateShadowColor(primaryColor),
    };
  }
  primaryColor = tinycolor(color).toHexString();
  return {
    primaryColor,
    hoverColor: generateHoverColor(primaryColor),
    activeColor: generateActiveColor(primaryColor),
    shadowColor: generateShadowColor(primaryColor),
  };
}

export function changeAntdTheme(colorObj, customCss) {
  let styleNode = colorObj.primaryColor;
  styleNode = document.createElement('style');
  styleNode.id = 'mini_dynamic_antd_theme_custom_style';
  styleNode.innerHTML = generateStyleHtml(colorObj, customCss);
  document.getElementsByTagName('head')[0].appendChild(styleNode);
}
