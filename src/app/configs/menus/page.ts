import { IMenuItem } from "../../core/pure-interfaces/menu";

export const PageMenu: IMenuItem[] = [
  {
    name: 'MENU.PAGES.AUTHENTICATION.TITLE',
    icon: 'security',
    children: [
      { name: 'MENU.PAGES.AUTHENTICATION.LOGIN', icon: 'lock', url: '/page/auth/login' },
      { name: 'MENU.PAGES.AUTHENTICATION.REGISTER', url: '/page/auth/register' },
      { name: 'MENU.PAGES.AUTHENTICATION.FORGOT_PASSWORD', url: '/page/auth/forgot_password' }
    ]
  },
  {
    name: 'MENU.PAGES.ERRORS.TITLE',
    icon: 'error',
    badge: 14,
    children: [
      { name: '404', icon: 'lock', url: '/page/error/404' },
      { name: '408', url: '/page/error/408' },
      { name: '500', url: '/page/error/500' },
      { name: 'MENU.PAGES.ERRORS.SESSION_EXPIRED', url: '/page/error/session_expired' }
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
