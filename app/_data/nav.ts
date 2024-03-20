const navLinks = [
  { name: 'Home', href: '/' },
  {
    type: 'group',
    name: 'Foundation',
    href: '/foundation',
    children: [
      {
        name: 'Color',
        href: '/foundation/color',
        images: '/images/color.svg',
        info: [
          `브랜드의 아이덴티티를 표현하는 중요한 요소입니다.`,
          `지정된 색상과 사용 규정을 숙지하여 브랜드 아이덴티티의 일관성을 유지할 수 있도록 합니다.`,
        ].join('\n'),
      },
      {
        name: 'Heading',
        href: '/foundation/heading',
        images: '/images/typography.svg',
        info: [
          `Heading은 페이지 및 템플릿, 모듈 단위 역할 및 기능의 강조 시 사용하는 타이포그래피 요소입니다.`,
          `자세한 가이드는 ‘Heading’ 도큐먼트를 확인합니다.`,
        ].join('\n'),
      },
      {
        name: 'Stack',
        href: '/foundation/stack',
        images: '/images/stack.svg',
        info: [
          `Stack은 균일한 요소와 간격을 사용하여 UI의 체계적인 배열을 도와줍니다.`,
          `페이지, 컴포넌트의 간격 및 수치를 해당 단위로 맞춰 사용하는 것을 권장합니다.`,
        ].join('\n'),
      },
      {
        name: 'Text',
        href: '/foundation/text',
        images: '/images/typography.svg',
        info: [
          `Text는 가장 보편적, 주되게 사용하는 타이포그래피 요소입니다.`,
          `자세한 가이드는 ‘Text’ 도큐먼트를 확인합니다.`,
        ].join('\n'),
      },
    ],
  },
  {
    type: 'group',
    name: 'Components',
    href: '/components',
    children: [
      { name: 'Accordion', images: '임시', href: '/components/accordion', info: ['임시'] },
      { name: 'Badge', images: '임시', href: '/components/badge', info: ['임시'] },
      { name: 'Button', images: '임시', href: '/components/button', info: ['임시'] },
      { name: 'Card', images: '임시', href: '/components/card', info: ['임시'] },
      { name: 'CheckBox', images: '임시', href: '/components/check-box', info: ['임시'] },
      { name: 'Icon', images: '임시', href: '/components/icon', info: ['임시'] },
      { name: 'Modal', images: '임시', href: '/components/modal', info: ['임시'] },
      { name: 'Select', images: '임시', href: '/components/select', info: ['임시'] },
      { name: 'Switch', images: '임시', href: '/components/switch', info: ['임시'] },
      { name: 'Tab', images: '임시', href: '/components/tab', info: ['임시'] },
      { name: 'Table', images: '임시', href: '/components/table', info: ['임시'] },
      { name: 'TextFiled', images: '임시', href: '/components/text-field', info: ['임시'] },
    ],
  },
];

export default navLinks;
