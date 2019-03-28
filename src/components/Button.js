import React from 'react';

const Button = ({ children, ...rest }) => (
  <button
    css={`
      background-color: red;
      color: white;
      font-size: 20px;
      font-weight: bold;
      border: none;
    `}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
