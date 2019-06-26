import { IMenuItem } from "../../core/pure-interfaces/menu";

export const PageMenu: IMenuItem[] = [
  {
    name: 'MENU.PAGES.AUTHENTICATION.TITLE',
    icon: 'security',
    children: [
      { name: 'MENU.PAGES.AUTHENTICATION.LOGIN', url: '/page/auth/login' },
      { name: 'MENU.PAGES.AUTHENTICATION.REGISTER', url: '/page/auth/register' },
      { name: 'MENU.PAGES.AUTHENTICATION.FORGOT_PASSWORD', url: '/page/auth/forgot-password' },
      { name: 'MENU.PAGES.AUTHENTICATION.CHANGE_PASSWORD', url: '/page/auth/change-password' },
      { name: 'MENU.PAGES.AUTHENTICATION.VERIFY', url: '/page/auth/verify' },
      { name: 'MENU.PAGES.AUTHENTICATION.VERIFY_WITH_CODE', url: '/page/auth/verify-with-code' },
      { name: 'MENU.PAGES.AUTHENTICATION.SESSION', url: '/page/auth/session' },
    ]
  },
  {
    name: 'MENU.PAGES.AUTHENTICATION.TITLE_V2',
    icon: 'security',
    children: [
      { name: 'MENU.PAGES.AUTHENTICATION.LOGIN', url: '/page/auth/login-v2' },
      { name: 'MENU.PAGES.AUTHENTICATION.REGISTER', url: '/page/auth/register-v2' },
      { name: 'MENU.PAGES.AUTHENTICATION.FORGOT_PASSWORD', url: '/page/auth/forgot-password-v2' },
      { name: 'MENU.PAGES.AUTHENTICATION.CHANGE_PASSWORD', url: '/page/auth/change-password-v2' },
      { name: 'MENU.PAGES.AUTHENTICATION.VERIFY', url: '/page/auth/verify-v2' },
      { name: 'MENU.PAGES.AUTHENTICATION.VERIFY_WITH_CODE', url: '/page/auth/verify-with-code-v2' },
      { name: 'MENU.PAGES.AUTHENTICATION.SESSION', url: '/page/auth/session-v2' },
    ]
  },
  {
    name: 'MENU.PAGES.ERRORS.TITLE',
    icon: 'error',
    badge: 14,
    children: [
      { name: '404', icon: 'error_outline', url: '/page/errors/error-404' },
      { name: '408', icon: 'error_outline', url: '/page/errors/error-408' },
      { name: '500', icon: 'error_outline', url: '/page/errors/error-500' },
      { name: 'MENU.PAGES.ERRORS.SESSION_EXPIRED', url: '/page/errors/error-session-expired' }
    ]
  },
  {
    name: 'MENU.PAGES.PRICING.TITLE',
    icon: 'local_atm',
    children: [
      { name: 'MENU.PAGES.PRICING.STYLE_1', url: '' },
      { name: 'MENU.PAGES.PRICING.STYLE_2', url: '' },
      { name: 'MENU.PAGES.PRICING.STYLE_3', url: '' }
    ]
  },
  { name: 'FAQ', icon: 'live_help', url: '/page/faq' }
];
