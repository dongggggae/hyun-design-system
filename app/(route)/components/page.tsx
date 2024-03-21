'use client';
import React from 'react';

import Card from '@components/Card/Card';
import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';

import navLinks from '_data/nav';

const ComponentPage = () => {
  const componentLinks = navLinks.find((link) => link.name === 'Components');

  const componentChild = componentLinks?.children || [];

  return (
    <div className="docs">
      <div className="hds-layout-content">
        <div className="banner-wrap">
          <div className="banner-content">
            <div className="banner">
              <Heading level="h2" size={2} text="Components" />
              <Text size="lg">
                컴포넌트는 디자인시스템의 재사용 가능한 구성요소입니다. 각 구성요소는 상호 작용 또는 UI 요구를
                충족합니다.
              </Text>
            </div>
          </div>
        </div>
        <div className="card-wrap">
          <div className="card-group">
            {componentChild.map((link) => (
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

export default ComponentPage;
