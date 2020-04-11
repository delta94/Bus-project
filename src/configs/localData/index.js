import nationalities from 'data/nationalities.json';
import theme from 'configs/theme/adminTheme';

export const NATIONALITIES = nationalities;

export const FORMAT_DATE = 'MMM DD, YYYY';

export const MEMBER_ROLES = [
  {
    id: 1,
    text: {
      en: 'Admin',
      vi: 'Admin',
    },
  },
  {
    id: 2,
    text: {
      en: 'Staff',
      vi: 'Nhân viên',
    },
  },
  {
    id: 3,
    text: {
      en: 'Member',
      vi: 'Khách hàng',
    },
  },
];

export const DISCOUNTS_TRIGGER = [
  {
    id: 1,
    value: 'Total',
    text: 'discounts.conditionTitle.Total',
    requireFields: ['totalToReach'],
  },
  {
    id: 2,
    value: 'Code',
    text: 'discounts.conditionTitle.Code',
    requireFields: ['code'],
  },
  {
    id: 3,
    value: 'Product',
    text: 'discounts.conditionTitle.Product',
    requireFields: ['productIds'],
  },
];

export const DISCOUNTS_TYPE = [
  {
    id: 1,
    value: 'FixedAmount',
    text: 'discounts.discountType.FixedAmount',
    requireFields: ['amount'],
  },
  // {
  //   id: 2,
  //   value: 'FixedAmountOnItems',
  //   text: 'FixedAmountOnItems',
  //   requireFields: ['amount'],
  // },
  {
    id: 3,
    value: 'Rate',
    text: 'discounts.discountType.Rate',
    requireFields: ['rate'],
  },
  {
    id: 4,
    value: 'AlternatePrice',
    text: 'discounts.discountType.AlternatePrice',
    requireFields: ['alternatePrice'],
  },
  {
    id: 5,
    value: 'Shipping',
    text: 'discounts.discountType.Shipping',
    requireFields: [
      'shippingCost',
      'shippingGuaranteedDaysToDelivery',
      'shippingDescription',
    ],
  },
  {
    id: 6,
    value: 'AmountOnSubscription',
    text: 'discounts.discountType.AmountOnSubscription',
    requireFields: ['amount'],
  },
  {
    id: 7,
    value: 'RateOnSubscription',
    text: 'discounts.discountType.RateOnSubscription',
    requireFields: ['rate'],
  },
];

export const LANGUAGES = [
  {
    id: 'en',
    text: {
      en: 'English',
      vi: 'Tiếng Anh',
    },
  },
  {
    id: 'vi',
    text: {
      en: 'Vietnamese',
      vi: 'Tiếng Việt',
    },
  },
];

export const GENDERS = [
  {
    value: 'Male',
    text: 'Male',
    icon: 'man',
    color: theme.color.blue,
  },
  {
    value: 'Female',
    text: 'Female',
    icon: 'women',
    color: theme.color.pink,
  },
  {
    value: 'other',
    text: 'gender.other',
  },
];

export const ROLE = [
  { text: 'users.role.superAdmin', value: 1 },
  { text: 'users.role.admin', value: 2 },
  { text: 'users.role.user', value: 3 },
];

export const CMS_CONTENT_TYPES = [
  {
    text: 'cms.contentType.page',
    value: 'page',
    prefixUrl: '/',
    initialFilter: {
      filter: {
        type: 'page',
      },
    },
  },
  {
    text: 'cms.contentType.categoryPage',
    value: 'categoryPage',
    prefixUrl: '/products?category=',
    initialFilter: {
      filter: {
        type: 'categoryPage',
      },
    },
  },
  {
    text: 'cms.contentType.menu',
    value: 'menu',
    initialFilter: {
      filter: {
        type: 'menu',
      },
    },
  },
  // { text: 'cms.contentType.productDetail', value: 'PRODUCT_DETAIL' },
  // { text: 'cms.contentType.categoryDetail', value: 'CATEGORY_DETAIL' },
  {
    text: 'cms.contentType.contact',
    value: 'contact',
    initialFilter: {
      filter: {
        type: 'contact',
      },
    },
  },
];

export const CMS_TEMPLATES = [
  { text: 'cms.template.section', value: 'SECTION' },
  { text: 'cms.template.banner', value: 'BANNER' },
  { text: 'cms.template.menuItem', value: 'MENU_ITEM' },
];

export const LOCALES = [
  { text: 'English', value: 'en' },
  { text: 'Vietnamese', value: 'vi' },
  // { text: 'cms.contentType.productDetail', value: 'PRODUCT_DETAIL' },
  // { text: 'cms.contentType.categoryDetail', value: 'CATEGORY_DETAIL' },
];

export const TRANSACTION_STATUS = [
  {
    value: 'all',
    text: 'analysis.status.all',
    color: theme.color.yellow,
    icon: 'ic-order',
    textColor: '#000',
  },
  {
    value: 'pending',
    text: 'analysis.status.pending',
    color: theme.color.green,
    icon: 'ic-revenue',
    textColor: 'white',
  },
  {
    value: 'approved',
    text: 'analysis.status.approved',
    color: theme.color.green,
    icon: 'interaction',
    textColor: 'white',
  },
  {
    value: 'rejected',
    text: 'analysis.status.rejected',
    color: theme.color.green,
    icon: 'shipping',
    textColor: 'white',
  },
  {
    value: 'cashback',
    text: 'analysis.status.cashback',
    color: theme.color.blue,
    icon: 'check-circle',
    textColor: 'white',
  },
  {
    value: 'notRejected',
    text: 'analysis.status.notRejected',
    color: theme.color.red,
    icon: 'close-circle',
    textColor: 'white',
  },
];

export const ACCOUNT_STATUS = [
  {
    value: 'false',
    text: 'Disabled',
    color: theme.color.red,
  },
  {
    value: 'true',
    text: 'Active',
    color: theme.color.green,
  },
];

export const RESOURCES = [
  {
    value: 'all',
    text: 'analysis.resource.all',
  },
  {
    value: 'access_trade',
    text: 'analysis.resource.access_trade',
  },
];

export const CASHBACK_FROM = [
  {
    value: 'all',
    text: 'analysis.cashbackFrom.all',
  },
  {
    value: 'true',
    text: 'analysis.cashbackFrom.partner',
  },
  {
    value: 'false',
    text: 'analysis.cashbackFrom.cashbag',
  },
];
