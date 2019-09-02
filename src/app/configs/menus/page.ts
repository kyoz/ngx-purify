import { IMenuItem } from '../../core/pure-interfaces/menu';

export const PageMenu: IMenuItem[] = [
  {
    name: 'MENU.PAGES.AUTHENTICATION.TITLE',
    icon: 'security',
    children: [
      { name: 'MENU.PAGES.AUTHENTICATION.LOGIN', url: '/pages/auth/login' },
      { name: 'MENU.PAGES.AUTHENTICATION.REGISTER', url: '/pages/auth/register' },
      { name: 'MENU.PAGES.AUTHENTICATION.FORGOT_PASSWORD', url: '/pages/auth/forgot-password' },
      { name: 'MENU.PAGES.AUTHENTICATION.CHANGE_PASSWORD', url: '/pages/auth/change-password' },
      { name: 'MENU.PAGES.AUTHENTICATION.VERIFY', url: '/pages/auth/verify' },
      { name: 'MENU.PAGES.AUTHENTICATION.VERIFY_WITH_CODE', url: '/pages/auth/verify-with-code' },
      { name: 'MENU.PAGES.AUTHENTICATION.SESSION', url: '/pages/auth/session' },
      { name: 'MENU.PAGES.AUTHENTICATION.SESSION_EXPIRED', url: '/pages/auth/session-expired' }
    ]
  },
  {
    name: 'MENU.PAGES.AUTHENTICATION.TITLE_V2',
    icon: 'security',
    children: [
      { name: 'MENU.PAGES.AUTHENTICATION.LOGIN', url: '/pages/auth/login-v2' },
      { name: 'MENU.PAGES.AUTHENTICATION.REGISTER', url: '/pages/auth/register-v2' },
      { name: 'MENU.PAGES.AUTHENTICATION.FORGOT_PASSWORD', url: '/pages/auth/forgot-password-v2' },
      { name: 'MENU.PAGES.AUTHENTICATION.CHANGE_PASSWORD', url: '/pages/auth/change-password-v2' },
      { name: 'MENU.PAGES.AUTHENTICATION.VERIFY', url: '/pages/auth/verify-v2' },
      { name: 'MENU.PAGES.AUTHENTICATION.VERIFY_WITH_CODE', url: '/pages/auth/verify-with-code-v2' },
      { name: 'MENU.PAGES.AUTHENTICATION.SESSION', url: '/pages/auth/session-v2' },
      { name: 'MENU.PAGES.AUTHENTICATION.SESSION_EXPIRED', url: '/pages/auth/session-expired-v2' }
    ]
  },
  {
    name: 'MENU.PAGES.ERRORS.TITLE',
    icon: 'error',
    badge: 14,
    children: [
      { name: '404', icon: 'error_outline', url: '/pages/errors/error-404' },
      { name: '408', icon: 'error_outline', url: '/pages/errors/error-408' },
      { name: '500', icon: 'error_outline', url: '/pages/errors/error-500' }
    ]
  },
  {
    name: 'MENU.PAGES.PRICING.TITLE',
    icon: 'local_atm',
    children: [
      { name: 'MENU.PAGES.PRICING.STYLE_1', url: '/pages/pricing/style-1' },
      { name: 'MENU.PAGES.PRICING.STYLE_2', url: '/pages/pricing/style-2' },
      { name: 'MENU.PAGES.PRICING.STYLE_3', url: '/pages/pricing/style-3' },
      { name: 'MENU.PAGES.PRICING.STYLE_4', url: '/pages/pricing/style-4' }
    ]
  },
  { name: 'FAQ', icon: 'live_help', url: '/pages/faq' }
];
