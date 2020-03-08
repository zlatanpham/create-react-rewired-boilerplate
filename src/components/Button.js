import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledButton = styled.button`
  ${tw`bg-black text-white px-10 py-4 rounded-full hover:shadow-lg hover:bg-purple-600 hover:text-red-300 transition-all duration-200 hover:scale-110 transform`}
  font-size: 20px;
  font-weight: bold;
  border: none;
`;

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
