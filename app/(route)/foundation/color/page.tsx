import React from 'react';

import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';
import colors from '@themes/tokens/colors';

const ColorPage = () => {
  const colorKeys = Object.keys(colors);

  return (
    <div className="docs">
      <div className="docs-color">
        {/* GrayColor */}
        <div className="component-content">
          <Heading level="h2" size={2} text="1. Gray" />
          <Text>다음은 Gray Scale을 나타냅니다.</Text>
          <div className="color__wrap">
            {colorKeys.slice(0, 17).map((color, index) => (
              <div className="color__unit" key={index}>
                <div className="color__box" style={{ backgroundColor: colors[color] }}></div>
                <Text>{color}</Text>
              </div>
            ))}
          </div>
        </div>
        {/* //GrayColor */}
        {/* Green & Blue & Navy Color */}
        <div className="component-content">
          <Heading level="h2" size={2} text="2. Green & Blue & Navy" />
          <Text>다음은 Green & Blue & Navy Scale을 나타냅니다.</Text>
          <div className="color__wrap">
            {colorKeys.slice(27, 43).map((color, index) => (
              <div className="color__unit" key={index}>
                <div className="color__box" style={{ backgroundColor: colors[color] }}></div>
                <Text>{color}</Text>
              </div>
            ))}
          </div>
        </div>
        {/* //Green & Blue & Navy Color */}
        {/* Red & Ember & Navy Color */}
        <div className="component-content">
          <Heading level="h2" size={2} text="3. Red & Ember" />
          <Text>다음은 Red & Ember Scale을 나타냅니다.</Text>
          <div className="color__wrap">
            {colorKeys.slice(17, 27).map((color, index) => (
              <div className="color__unit" key={index}>
                <div className="color__box" style={{ backgroundColor: colors[color] }}></div>
                <Text>{color}</Text>
              </div>
            ))}
          </div>
        </div>
        {/* //Red & Ember & Navy Color */}
      </div>
    </div>
  );
};

export default ColorPage;
