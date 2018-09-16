import { IMenuItem } from "../../core/pure-interfaces/menu";

export const PageMenu: IMenuItem[] = [
  {
    name: 'Authentication',
    icon: 'security',
    children: [
      { name: 'Login', icon: 'lock', url: '/page/auth/login' },
      { name: 'Register', url: '/page/auth/register' },
      { name: 'Forgot Password', url: '/page/auth/forgot_password' }
    ]
  },
  {
    name: 'Errors',
    icon: 'error',
    children: [
      { name: '404', icon: 'lock', url: '/page/error/404' },
      { name: '408', url: '/page/error/408' },
      { name: '500', url: '/page/error/500' },
      { name: 'Session Expired', url: '/page/error/session_expired' }
    ]
  },
  {
    name: 'Pricing',
    icon: 'local_atm',
    children: [
      { name: 'Style 1', url: '' },
      { name: 'Style 2', url: '' },
      { name: 'Style 3', url: '' }
    ]
  },
  { name: 'FAQ', icon: 'live_help', url: '/page/faq' }
];
