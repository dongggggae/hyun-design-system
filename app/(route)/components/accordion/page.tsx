'use client';
import React from 'react';
import dynamic from 'next/dynamic';

import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';
import Accordion from '@components/Accordion/Accordion';

const CodeContainer = dynamic(() => import('@docs/CodeContainer'));

const AccorionPage = () => {
  return (
    <div className="docs">
      <div className="docs-accordion">
        {/* Overview */}
        <div className="component-content">
          <Heading level="h2" size={2} text="1. 개요" />
          <Text>Accordion 컴포넌트를 통해 아코디언 요소를 생성합니다.</Text>
          <div className="preview fill">
            <Accordion>
              <Accordion.Item title="Accordion Title1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam quisquam quae officiis nemo,
                  natus autem placeat optio at qui nobis quod, maxime in aspernatur sint sed eaqueitaque ea.
                </p>
              </Accordion.Item>
              <Accordion.Item title="Accordion Title2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam quisquam quae officiis nemo,
                  natus autem placeat optio at qui nobis quod, maxime in aspernatur sint sed eaqueitaque ea.
                </p>
              </Accordion.Item>
              <Accordion.Item title="Accordion Title3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam quisquam quae officiis nemo,
                  natus autem placeat optio at qui nobis quod, maxime in aspernatur sint sed eaqueitaque ea.
                </p>
              </Accordion.Item>
            </Accordion>
          </div>
          <CodeContainer codeString={accordionCode.overview} />
        </div>
        {/* //Overview */}
        <div className="component-content">
          <Heading level="h2" size={2} text="2. Title" />
          <Text>Title 프로퍼티를 통해 아코디언의 제목을 지정할 수 있습니다.</Text>
          <div className="preview fill">
            <Accordion>
              <Accordion.Item title="Accordion Title1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam quisquam quae officiis nemo,
                  natus autem placeat optio at qui nobis quod, maxime in aspernatur sint sed eaqueitaque ea.
                </p>
              </Accordion.Item>
              <Accordion.Item title="Accordion Title2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam quisquam quae officiis nemo,
                  natus autem placeat optio at qui nobis quod, maxime in aspernatur sint sed eaqueitaque ea.
                </p>
              </Accordion.Item>
              <Accordion.Item title="Accordion Title3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam quisquam quae officiis nemo,
                  natus autem placeat optio at qui nobis quod, maxime in aspernatur sint sed eaqueitaque ea.
                </p>
              </Accordion.Item>
            </Accordion>
          </div>
          <CodeContainer codeString={accordionCode.title} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="3. isOpen" />
          <Text>AccordionItem 컴포넌트의 isOpen 프로퍼티를 통해 해당 컨텐츠가 펼쳐진 채로 나타납니다.</Text>
          <div className="preview fill">
            <Accordion>
              <Accordion.Item title="Accordion Title1" isOpen>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam quisquam quae officiis nemo,
                  natus autem placeat optio at qui nobis quod, maxime in aspernatur sint sed eaqueitaque ea.
                </p>
              </Accordion.Item>
              <Accordion.Item title="Accordion Title2" isOpen>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam quisquam quae officiis nemo,
                  natus autem placeat optio at qui nobis quod, maxime in aspernatur sint sed eaqueitaque ea.
                </p>
              </Accordion.Item>
              <Accordion.Item title="Accordion Title3" isOpen>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam quisquam quae officiis nemo,
                  natus autem placeat optio at qui nobis quod, maxime in aspernatur sint sed eaqueitaque ea.
                </p>
              </Accordion.Item>
            </Accordion>
          </div>
          <CodeContainer codeString={accordionCode.isOpen} />
        </div>
      </div>
    </div>
  );
};

const accordionCode = {
  overview: [
    `<!-- Default Accordion -->`,
    ` <Accordion>`,
    `   <Accordion.Item title="Accordion Title1">`,
    `     <p>`,
    `       Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    `       Quas veniam quisquam quae officiis nemo, natus autem placeat optio at qui nobis quod, `,
    `       maxime in aspernatur sint sed eaqueitaque ea.`,
    `     </p>`,
    `   </Accordion.Item>`,
    `   <Accordion.Item title="Accordion Title2">`,
    `     <p>`,
    `       Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    `       Quas veniam quisquam quae officiis nemo, natus autem placeat optio at qui nobis quod, `,
    `       maxime in aspernatur sint sed eaqueitaque ea.`,
    `     </p>`,
    `   </Accordion.Item>`,
    `   <Accordion.Item title="Accordion Title3">`,
    `     <p>`,
    `       Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    `       Quas veniam quisquam quae officiis nemo, natus autem placeat optio at qui nobis quod, `,
    `       maxime in aspernatur sint sed eaqueitaque ea.`,
    `     </p>`,
    `    </Accordion.Item>`,
    `</Accordion>`,
  ].join(`\n`),
  title: [
    `<!-- Default Accordion -->`,
    ` <Accordion>`,
    `   <Accordion.Item title="Accordion Title1">`,
    `     <p>`,
    `       Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    `       Quas veniam quisquam quae officiis nemo, natus autem placeat optio at qui nobis quod, `,
    `       maxime in aspernatur sint sed eaqueitaque ea.`,
    `     </p>`,
    `   </Accordion.Item>`,
    `   <Accordion.Item title="Accordion Title2">`,
    `     <p>`,
    `       Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    `       Quas veniam quisquam quae officiis nemo, natus autem placeat optio at qui nobis quod, `,
    `       maxime in aspernatur sint sed eaqueitaque ea.`,
    `     </p>`,
    `   </Accordion.Item>`,
    `   <Accordion.Item title="Accordion Title3">`,
    `     <p>`,
    `       Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    `       Quas veniam quisquam quae officiis nemo, natus autem placeat optio at qui nobis quod, `,
    `       maxime in aspernatur sint sed eaqueitaque ea.`,
    `     </p>`,
    `    </Accordion.Item>`,
    `</Accordion>`,
  ].join(`\n`),
  isOpen: [
    `<!-- Default Accordion -->`,
    ` <Accordion>`,
    `   <Accordion.Item title="Accordion Title1" isOpen >`,
    `     <p>`,
    `       Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    `       Quas veniam quisquam quae officiis nemo, natus autem placeat optio at qui nobis quod, `,
    `       maxime in aspernatur sint sed eaqueitaque ea.`,
    `     </p>`,
    `   </Accordion.Item>`,
    `   <Accordion.Item title="Accordion Title2" isOpen >`,
    `     <p>`,
    `       Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    `       Quas veniam quisquam quae officiis nemo, natus autem placeat optio at qui nobis quod, `,
    `       maxime in aspernatur sint sed eaqueitaque ea.`,
    `     </p>`,
    `   </Accordion.Item>`,
    `   <Accordion.Item title="Accordion Title3" isOpen >`,
    `     <p>`,
    `       Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    `       Quas veniam quisquam quae officiis nemo, natus autem placeat optio at qui nobis quod, `,
    `       maxime in aspernatur sint sed eaqueitaque ea.`,
    `     </p>`,
    `    </Accordion.Item>`,
    `</Accordion>`,
  ].join(`\n`),
};

export default AccorionPage;
