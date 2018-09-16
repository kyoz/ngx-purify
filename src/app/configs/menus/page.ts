import { IMenuItem } from "../../core/pure-interfaces/menu";

export const PageMenu: IMenuItem[] = [
  {
    name: 'Authentication',
    icon: 'security',
    children: [
      { name: 'Login', icon: 'lock', route: '/page/auth/login' },
      { name: 'Register', route: '/page/auth/register' },
      { name: 'Forgot Password', route: '/page/auth/forgot_password' }
    ]
  },
  {
    name: 'Errors',
    icon: 'error',
    children: [
      { name: '404', icon: 'lock', route: '/page/error/404' },
      { name: '408', route: '/page/error/408' },
      { name: '500', route: '/page/error/500' },
      { name: 'Session Expired', route: '/page/error/session_expired' }
    ]
  },
  {
    name: 'Pricing',
    icon: 'local_atm',
    children: [
      { name: 'Style 1', route: '' },
      { name: 'Style 2', route: '' },
      { name: 'Style 3', route: '' }
    ]
  },
  { name: 'FAQ', icon: 'live_help', route: '/page/faq' }
];
