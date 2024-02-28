import React from 'react';

import navLinks from '_data/nav';
import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';
import Card from '@components/Card/Card';

const Foundation = () => {
  const foundationLinks = navLinks.find((link) => link.name === 'Foundation');

  const foundationChildren = foundationLinks?.children || [];

  return (
    <div className="docs">
      <div className="layout-foundation">
        <div className="banner-wrap">
          <div className="banner-content">
            <div className="banner">
              <Heading level="h2" size={2} text="Foundation" />
              <Text size="lg">
                파운데이션은 최소한의 디자인 규칙을 가지고 있는 가장 작은 단위의 디자인 요소입니다.
                <br />
                UI 영역, 구성요소로 표현될 수 있는 품질을 정의합니다.
              </Text>
            </div>
          </div>
        </div>
        <div className="card-wrap">
          <div className="card-group">
            {foundationChildren.map((link) => (
              <Card key={link.name} to={link.href}>
                <Card.Img />
                <Card.Title title={link.name} />
                <Card.Text text={Array.isArray(link.info) ? link.info[0] : link.info} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foundation;
