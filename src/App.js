import { hot } from 'react-hot-loader/root';
import React from 'react';
import Button from 'components/Button';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`bg-white min-h-screen flex items-center justify-center bg-gray-300`}
`;

function App() {
  return (
    <Container
      css={`
        padding-bottom: 50px;
      `}
      className="flex items-center justify-center h-screen"
    >
      <Button>Click me please</Button>
    </Container>
  );
}

export default hot(App);
