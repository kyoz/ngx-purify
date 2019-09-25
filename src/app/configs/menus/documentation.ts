import { MenuItem } from '../../core/pure-models/menu';

export const DocumentationMenu: MenuItem[] = [
  {
    name: 'Getting Started', icon: 'chrome_reader_mode', children: [
      { name: 'Introduction', icon: 'chrome_reader_mode' },
      { name: 'Installation', icon: 'chrome_reader_mode' },
    ]
  },
  {
    name: 'Configuration', icon: 'chrome_reader_mode', children: [
      { name: 'Menu', icon: 'chrome_reader_mode' },
      { name: 'Themes', icon: 'chrome_reader_mode' },
      { name: 'Language Translation', icon: 'chrome_reader_mode' }
    ]
  },
  {
    name: 'Developing', icon: 'chrome_reader_mode', children: [
      { name: 'Start Server', icon: 'chrome_reader_mode' },
      { name: 'Production', icon: 'chrome_reader_mode' }
    ]
  },
  { name: 'Components', icon: 'chrome_reader_mode' },
  { name: 'Directives', icon: 'chrome_reader_mode' },
  { name: 'Services', icon: 'chrome_reader_mode' },
  { name: '3rd Party Components', icon: 'chrome_reader_mode' },
  { name: 'Changelog', icon: 'history', url: '/document/changelog' }
];
