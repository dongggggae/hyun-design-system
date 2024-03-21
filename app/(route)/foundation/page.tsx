import React from 'react';

import Card from '@components/Card/Card';
import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';

import navLinks from '_data/nav';

const FoundationPage = () => {
  const foundationLinks = navLinks.find((link) => link.name === 'Foundation');

  const foundationChild = foundationLinks?.children || [];

  return (
    <div className="docs">
      <div className="hds-layout-content">
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
            {foundationChild.map((link) => (
              <Card key={link.name} to={link.href}>
                <Card.Img src={link.images} width={200} height={150} alt={`${link.name} Thumbnail`} />
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

export default FoundationPage;
