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
          '컬러(Color)는 브랜드의 아이덴티티를 표현하는 중요한 요소입니다.',
          '지정된 색상과 사용 규정을 숙지하여 브랜드 아이덴티티의 일관성을 유지할 수 있도록 합니다.',
        ].join('\n'),
      },
      {
        name: 'Heading',
        href: '/foundation/heading',
        images: '/images/typography.svg',
        info: [
          '헤딩(Heading)은 페이지 및 템플릿, 모듈 단위 역할 및 기능의 강조 시 사용하는 타이포그래피 요소입니다.',
          '자세한 가이드는 ‘Heading’ 도큐먼트를 확인합니다.',
        ].join('\n'),
      },
      {
        name: 'Stack',
        href: '/foundation/stack',
        images: '/images/stack.svg',
        info: [
          '스택(Stack)은 균일한 요소와 간격을 사용하여 UI의 체계적인 배열을 도와줍니다.',
          '페이지, 컴포넌트의 간격 및 수치를 해당 단위로 맞춰 사용하는 것을 권장합니다.',
        ].join('\n'),
      },
      {
        name: 'Text',
        href: '/foundation/text',
        images: '/images/typography.svg',
        info: [
          '텍스트(Text)는 가장 보편적, 주되게 사용하는 타이포그래피 요소입니다.',
          '자세한 가이드는 ‘Text’ 도큐먼트를 확인합니다.',
        ].join('\n'),
      },
    ],
  },
  {
    type: 'group',
    name: 'Components',
    href: '/components',
    children: [
      {
        name: 'Accordion',
        images: '/images/accordion.svg',
        href: '/components/accordion',
        info: [
          '아코디언(Accordion)은 중요한 세부 사항을 먼저 강조 표시하고 확장되면 더 많은 세부 정보를 표시하여 점진적으로 정보를 공개합니다.',
          '체를 읽는 것이 중요하지 않은 경우 아코디언을 사용하여 페이지 스크롤을 줄일 수 있습니다.',
        ].join('\n'),
      },
      {
        name: 'Badge',
        images: '/images/badge.svg',
        href: '/components/badge',
        info: [
          '뱃지(Badge)는 사용자에게 정보를 강조하거나 특정 요소에 주의를 끌기 위해 아이콘 또는 텍스트에 추가적인 요소를 사용하여 표시합니다.',
          '배지 내의 콘텐츠는 일반적으로 숫자나 아이콘을 포함합니다.',
        ].join('\n'),
      },
      {
        name: 'Button',
        images: '/images/button.svg',
        href: '/components/button',
        info: [
          '버튼(Buttons)은 가장 주요한 UI 컴포넌트입니다.',
          '콘텐츠 영역에 배치되어 중요한 동작을 실행하는 버튼으로 사용됩니다',
        ].join('\n'),
      },
      {
        name: 'Card',
        images: '/images/card.svg',
        href: '/components/card',
        info: [
          '카드(Card)는 사용자에게 상품 정보를 집약적으로 전달하기 위한 요소입니다.',
          '해당 정보를 한 눈에 전달하는 목적을 가집니다.',
        ].join('\n'),
      },
      {
        name: 'CheckBox',
        images: '/images/checkbox.svg',
        href: '/components/check-box',
        info: [
          '체크박스(Check Box)는 사용자가 선택 옵션들을 제어할 수 있도록 제어할 수 있도록 돕는 컴포넌트입니다.',
          '체크박스를 사용하여 다중선택을 제어할 수 있습니다.',
        ].join('\n'),
      },
      {
        name: 'Icon',
        images: '/images/icon.svg',
        href: '/components/icon',
        info: [
          '아이콘(Icon)은 기능, 행동, 사물의 상징을 가호로 만든 시각 언어입니다.',
          '아이콘을 사용하여 한정적인 공간에서 효율적인 정보 제공을 할 수 있습니다.',
        ].join('\n'),
      },
      {
        name: 'Modal',
        images: '/images/modal.svg',
        href: '/components/modal',
        info: [
          '모달(Modal)은 현재 작업과 관련된 정보를 사용자에게 알립니다.',
          '사용자의 결정에 대해 경고, 결과 전달에 사용되며, 액션을 취하기 전까지 화면에 남아 정보를 제공합니다.',
        ].join('\n'),
      },
      {
        name: 'Radio',
        images: '/images/typography.svg',
        href: '/components/radio',
        info: [
          '라디오(Radio)는 사용자가 단일 선택이 필요할 때 활용되는 컴포넌트입니다.',
          '라디오 버튼을 통하여 단일 옵션에 대한 정보를 제어할 수 있습니다.',
        ].join('\n'),
      },
      {
        name: 'Select',
        images: '/images/typography.svg',
        href: '/components/select',
        info: [
          '셀렉트(Select)는 사용자가 여러 옵션 중 하나의 옵션 선택 시 활용되는 컴포넌트입니다.',
          '선택 가능한 옵션이 여러개일 경우, 셀렉트를 사용하여 옵션의 선택을 도와줍니다.',
        ].join('\n'),
      },
      {
        name: 'Switch',
        images: '/images/switch.svg',
        href: '/components/switch',
        info: [
          '스위치(Switch)는 사용자가 특정 옵션을 제어할 수 있도록 제어할 수 있도록 돕는 컴포넌트입니다.',
          '사용자는 스위치를 통해 옵션의 상태를 이해할 수 있습니다.',
        ].join('\n'),
      },
      {
        name: 'Tab',
        images: '/images/typography.svg',
        href: '/components/tab',
        info: [
          '탭(Tab)은 페이지 내에서 유사한 정보를 그룹화하여 섹션 간 이동 시 사용됩니다.',
          '선택된 상태로 사용자 위치를 쉽고 빠르게 나타내므로 시각적 일관성이 필요합니다.',
        ].join('\n'),
      },
      {
        name: 'Table',
        images: '/images/typography.svg',
        href: '/components/table',
        info: [
          '테이블(Table)은 데이터를 체계적으로 정리하여 시각적으로 정보를 제공합니다.',
          '데이터의 특성을 파악하고 정보를 쉽게 비교할 수 있도록 도와줍니다.',
        ].join('\n'),
      },
      {
        name: 'TextFiled',
        images: '/images/textfiled.svg',
        href: '/components/text-field',
        info: [
          '텍스트 필드(Text Fields)는 사용자가 UI 상 텍스트 입력 및 확인 시 활용되는 컴포넌트입니다.',
          '한 줄 입력인 텍스트 필드(Text Field)와 여러 줄 입력인 텍스트 영역(Text Area)으로 나뉩니다.',
        ].join('\n'),
      },
    ],
  },
];

export default navLinks;
