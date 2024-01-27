const navLinks = [
  { name: 'Home', href: '/' },
  {
    type: 'group',
    name: 'Components',
    href: '/components',
    children: [
      { name: 'Accordion', href: '/components/accordion' },
      { name: 'Badge', href: '/components/badge' },
      { name: 'Button', href: '/components/button' },
      { name: 'Card', href: '/components/card' },
      { name: 'CheckBox', href: '/components/check-box' },
      { name: 'Icon', href: '/components/icon' },
      { name: 'Modal', href: '/components/modal' },
      { name: 'Select', href: '/components/select' },
      { name: 'Switch', href: '/components/switch' },
      { name: 'Tab', href: '/components/tab' },
      { name: 'Table', href: '/components/table' },
      { name: 'TextFiled', href: '/components/text-field' },
    ],
  },
  {
    type: 'group',
    name: 'Foundation',
    href: '/foundation',
    children: [
      { name: 'Color', href: '/foundation/color' },
      { name: 'Heading', href: '/foundation/heading' },
      { name: 'Text', href: '/foundation/text' },
    ],
  },
];

export default navLinks;
