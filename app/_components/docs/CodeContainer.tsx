import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('json', json);

interface CodeStringProps {
  codeString: string;
}

export default function CodeContainer({ codeString }: CodeStringProps) {
  return (
    <div className="code__container">
      <SyntaxHighlighter language="tsx" showLineNumbers={true} style={tomorrow}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
