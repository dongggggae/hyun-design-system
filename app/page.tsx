import React from 'react';

import Card from '@components/Card/Card';

const Home = () => {
  return (
    <div className="docs">
      <div className="card-wrap">
        <div className="card-group">
          <Card to="/">
            <Card.Img src={'/images/card.svg'} width={200} height={150} alt="test"></Card.Img>
            <Card.Title title="Test" />
            <Card.Text text="Test" />
          </Card>
          <Card to="/">
            <Card.Img src={'/images/icon.svg'} width={200} height={150} alt="test"></Card.Img>
            <Card.Title title="Test" />
            <Card.Text text="Test" />
          </Card>
          <Card to="/">
            <Card.Img src={'/images/accordion.svg'} width={200} height={150} alt="test"></Card.Img>
            <Card.Title title="Test" />
            <Card.Text text="Test" />
          </Card>
          <Card to="/">
            <Card.Img src={'/images/modal.svg'} width={200} height={150} alt="test"></Card.Img>
            <Card.Title title="Test" />
            <Card.Text text="Test" />
          </Card>
          <Card to="/">
            <Card.Img src={'/images/badge.svg'} width={200} height={150} alt="test"></Card.Img>
            <Card.Title title="Test" />
            <Card.Text text="Test" />
          </Card>
          <Card to="/">
            <Card.Img src={'/images/button.svg'} width={200} height={150} alt="test"></Card.Img>
            <Card.Title title="Test" />
            <Card.Text text="Test" />
          </Card>
          <Card to="/">
            <Card.Img src={'/images/textfiled.svg'} width={200} height={150} alt="test"></Card.Img>
            <Card.Title title="Test" />
            <Card.Text text="Test" />
          </Card>
          <Card to="/">
            <Card.Img src={'/images/switch.svg'} width={200} height={150} alt="test"></Card.Img>
            <Card.Title title="Test" />
            <Card.Text text="Test" />
          </Card>
          <Card to="/">
            <Card.Img src={'/images/radio.svg'} width={200} height={150} alt="test"></Card.Img>
            <Card.Title title="Test" />
            <Card.Text text="Test" />
          </Card>
          <Card to="/">
            <Card.Img src={'/images/checkbox.svg'} width={200} height={150} alt="test"></Card.Img>
            <Card.Title title="Test" />
            <Card.Text text="Test" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
