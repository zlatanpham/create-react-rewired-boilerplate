import React from 'react';
import Button from '@/components/Button';

function App() {
  return (
    <div
      css={`
        padding-bottom: 50px;
      `}
      className="bg-grey flex items-center justify-center h-screen"
    >
      <Button>Click me please</Button>
    </div>
  );
}

export default App;
