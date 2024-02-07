import React from 'react';
import Card from '../../../_components/hds/card/Card';

const AccorionPage: React.FC = () => {
  const route = '/components/badge';

  return (
    <div className="docs">
      Accorion Page
      <Card to={route}>
        <Card.Img imageUrl={'/images/thumbnail.svg'} />
        <Card.Title title="가나다라마바사" />
        <Card.Text text="asdasdas" />
      </Card>
    </div>
  );
};

export default AccorionPage;
