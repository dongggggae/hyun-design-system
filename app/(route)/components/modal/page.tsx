// 'use client';
// import dynamic from 'next/dynamic';
// import React, { useState } from 'react';

// import Btn from '@components/Btn/Btn';
// import Modal from '@components/Modal/Modal';
// import Stack from '@components/Stack/Stack';
// import Heading from '@components/Typography/Heading';
// import Text from '@components/Typography/Text';

// const CodeContainer = dynamic(() => import('@docs/CodeContainer'));

// interface ModalState {
//   [key: string]: boolean;
// }

// const ModalPage = () => {
//   const [modals, setModals] = useState<ModalState>({});

//   const toggleLayerVisible = (modalKey: string) => {
//     setModals((prevModals) => ({
//       ...prevModals,
//       [modalKey]: !prevModals[modalKey],
//     }));
//   };

//   return (
//     <div className="docs">
//       <div className="docs-modal">
//         <div className="component-content">
//           <Heading level="h2" size={2} text="1. 개요" />
//           <Text>Modal 컴포넌트를 통해 기존 화면 위에 모달을 생성합니다.</Text>
//           <div className="preview">
//             <Btn onClick={() => toggleLayerVisible('modal1')} text="Default Modal" />
//           </div>
//           <CodeContainer codeString={modalCode.overview} />
//         </div>
//         <div className="component-content">
//           <Heading level="h2" size={2} text="2. Close" />
//           <Text>
//             Close 프로퍼티를 통해 Modal Header 컴포넌트의 닫기 버튼 유무를 설정합니다. 기본 값은 &#39;false&#39; 입니다.
//           </Text>
//           <div className="preview">
//             <Btn onClick={() => toggleLayerVisible('modal2')} text="Default Modal" />
//           </div>
//           <CodeContainer codeString={modalCode.close} />
//         </div>
//         <div className="component-content">
//           <Heading level="h2" size={2} text="3. Type" />
//           <Text>
//             Type 프로퍼티를 통해 Modal의 스타일을 설정합니다.
//             <br />
//             Type 프로퍼티 속성은 &#39;center&#39;, &#39;scrollable&#39;, &#39;fullscreen&#39; 가 있습니다.
//           </Text>
//           <div className="preview">
//             <Stack gap={4}>
//               <Btn onClick={() => toggleLayerVisible('modal1')} text="Default Modal" />
//               <Btn onClick={() => toggleLayerVisible('modal3')} text="Centered Modal" />
//               <Btn onClick={() => toggleLayerVisible('modal4')} text="Scrollable Modal" />
//             </Stack>
//           </div>
//           <CodeContainer codeString={modalCode.type} />
//         </div>
//         <div className="component-content">
//           <Heading level="h2" size={2} text="4. Size" />
//           <Text>
//             Size 프로퍼티를 통해 Modal의 크기를 설정합니다. 기본값은 &#39;md&#39; 입니다.
//             <br />
//             Size 프로퍼티 속성은 &#39;sm&#39;, &#39;md&#39;, &#39;lg&#39; 가 있습니다.
//           </Text>
//           <div className="preview">
//             <Stack gap={4}>
//               <Btn onClick={() => toggleLayerVisible('modal5')} text="Small Size Modal" />
//               <Btn onClick={() => toggleLayerVisible('modal1')} text="Medium Size Modal" />
//               <Btn onClick={() => toggleLayerVisible('modal6')} text="Large Size Modal" />
//             </Stack>
//           </div>
//           <CodeContainer codeString={modalCode.size} />
//         </div>
//       </div>

//       {/* Default Modal */}
//       <Modal show={modals.modal1} onHide={() => toggleLayerVisible('modal1')} modalKey={'modal1'}>
//         <Modal.Header title="Modal Title" />
//         <Modal.Body>Modal Body</Modal.Body>
//         <Modal.Footer>
//           <Btn onClick={() => toggleLayerVisible('modal1')} text="Modal Close Button" />
//         </Modal.Footer>
//       </Modal>
//       {/* Close Button Modal */}
//       <Modal show={modals.modal2} onHide={() => toggleLayerVisible('modal2')} modalKey={'modal2'}>
//         <Modal.Header title="Modal Title" close />
//         <Modal.Body>Modal Body</Modal.Body>
//         <Modal.Footer>
//           <Btn onClick={() => toggleLayerVisible('modal2')} text="Modal Close Button" />
//         </Modal.Footer>
//       </Modal>
//       {/* Centered Modal */}
//       <Modal show={modals.modal3} onHide={() => toggleLayerVisible('modal3')} modalKey={'modal3'} type="center">
//         <Modal.Header title="Modal Title" />
//         <Modal.Body>Modal Body</Modal.Body>
//         <Modal.Footer>
//           <Btn onClick={() => toggleLayerVisible('modal3')} text="Modal Close Button" />
//         </Modal.Footer>
//       </Modal>
//       {/* Scrollable Modal */}
//       <Modal show={modals.modal4} onHide={() => toggleLayerVisible('modal4')} modalKey={'modal4'} type="scrollable">
//         <Modal.Header title="Modal Title" />
//         <Modal.Body>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi minus
//           et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi odio, ipsam
//           tempora.
//           <br />
//           <br />
//           <br />
//           <br />
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi minus
//           et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi odio, ipsam
//           tempora.
//           <br />
//           <br />
//           <br />
//           <br />
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi minus
//           et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi odio, ipsam
//           tempora.
//           <br />
//           <br />
//           <br />
//           <br />
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi minus
//           et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi odio, ipsam
//           tempora.
//           <br />
//           <br />
//           <br />
//           <br />
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi minus
//           et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi odio, ipsam
//           tempora.
//           <br />
//           <br />
//           <br />
//           <br />
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi minus
//           et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi odio, ipsam
//           tempora.
//           <br />
//           <br />
//           <br />
//           <br />
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi minus
//           et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi odio, ipsam
//           tempora.
//           <br />
//           <br />
//           <br />
//           <br />
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi minus
//           et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi odio, ipsam
//           tempora.
//           <br />
//           <br />
//           <br />
//           <br />
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi minus
//           et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi odio, ipsam
//           tempora.
//           <br />
//           <br />
//           <br />
//           <br />
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi minus
//           et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi odio, ipsam
//           tempora.
//           <br />
//           <br />
//           <br />
//           <br />
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi minus
//           et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi odio, ipsam
//           tempora.
//         </Modal.Body>
//         <Modal.Footer>
//           <Btn onClick={() => toggleLayerVisible('modal4')} text="Modal Close Button" />
//         </Modal.Footer>
//       </Modal>
//       {/* Small Size Modal */}
//       <Modal show={modals.modal5} onHide={() => toggleLayerVisible('modal5')} modalKey={'modal5'} size="sm">
//         <Modal.Header title="Modal Title" close />
//         <Modal.Body>Modal Body</Modal.Body>
//         <Modal.Footer>
//           <Btn onClick={() => toggleLayerVisible('modal5')} text="Modal Close Button" />
//         </Modal.Footer>
//       </Modal>
//       {/* Large Size Modal */}
//       <Modal show={modals.modal6} onHide={() => toggleLayerVisible('modal6')} modalKey={'modal6'} size="lg">
//         <Modal.Header title="Modal Title" close />
//         <Modal.Body>Modal Body</Modal.Body>
//         <Modal.Footer>
//           <Btn onClick={() => toggleLayerVisible('modal6')} text="Modal Close Button" />
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// const modalCode = {
//   overview: [
//     `<!-- Default Modal -->`,
//     `<!-- Script -->`,
//     `const [modals, setModals] = useState<ModalState>({});`,
//     `const toggleLayerVisible = (modalKey: string) => {`,
//     ` setModals((prevModals) => ({`,
//     `   ...prevModals,`,
//     `   [modalKey]: !prevModals[modalKey],`,
//     ` }));`,
//     `};`,
//     ``,
//     `<Btn onClick={() => toggleLayerVisible('modal1')} text="Default Modal" />`,
//     `<Modal show={modals.modal1} onHide={() => toggleLayerVisible('modal1')} modalKey={'modal1'}>`,
//     ` <Modal.Header title="Modal Title" />`,
//     ` <Modal.Body>Modal Body</Modal.Body>`,
//     ` <Modal.Footer>`,
//     `   <Btn onClick={() => toggleLayerVisible('modal1')} text="Modal Close Button" />`,
//     ` </Modal.Footer>`,
//     `</Modal>`,
//   ].join('\n'),
//   close: [
//     `<!-- Close Button Modal -->`,
//     `// ...`,
//     `<Btn onClick={() => toggleLayerVisible('modal2')} text="Close Button Modal" />`,
//     `<Modal ...>`,
//     ` <Modal.Header title="Modal Title" close />`,
//     ` // ...`,
//     `</Modal>`,
//   ].join('\n'),
//   type: [
//     `<!-- Default Modal -->`,
//     `// ...`,
//     `<Btn onClick={() => toggleLayerVisible('modal1')} text="Default Modal" />`,
//     `<Modal ...>`,
//     `// ...`,
//     `</Modal>`,
//     ``,
//     `<!-- Centered Modal -->`,
//     `// ...`,
//     `<Btn onClick={() => toggleLayerVisible('modal3')} text="Centered Modal" />`,
//     `<Modal ... type="center">`,
//     `// ...`,
//     `</Modal>`,
//     ``,
//     `<!-- Scrollable Modal -->`,
//     `// ...`,
//     `<Btn onClick={() => toggleLayerVisible('modal4')} text="Scrollable Modal" />`,
//     `<Modal ... type="scrollable">`,
//     `// ...`,
//     `</Modal>`,
//   ].join('\n'),
//   size: [
//     `<!-- Small Size Modal -->`,
//     `// ...`,
//     `<Btn onClick={() => toggleLayerVisible('modal5')} text="Small Size Modal" />`,
//     `<Modal ... size="sm">`,
//     `// ...`,
//     `</Modal>`,
//     ``,
//     `<!-- Medium Size Modal -->`,
//     `// ...`,
//     `<Btn onClick={() => toggleLayerVisible('modal1')} text="Medium Size Modal" />`,
//     `<Modal ...>`,
//     `// ...`,
//     `</Modal>`,
//     ``,
//     `<!-- Large Size Modal -->`,
//     `// ...`,
//     `<Btn onClick={() => toggleLayerVisible('modal6')} text="Large Size Modal" />`,
//     `<Modal ... size="lg">`,
//     `// ...`,
//     `</Modal>`,
//   ].join('\n'),
// };

// export default ModalPage;
import React from 'react';

const ModalPage = () => {
  return <div className="docs">ModalPage</div>;
};

export default ModalPage;
